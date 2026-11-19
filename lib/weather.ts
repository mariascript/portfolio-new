export type Weather = {
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  code: number;
  time: string;
};

export type WeatherErrorType = "timeout" | "network" | "http" | "invalid" | "unknown";

export type WeatherResult =
  | { ok: true; data: Weather }
  | { ok: false; error: { type: WeatherErrorType; message: string } };

type WeatherOptions = { retryable?: boolean; cause?: unknown };

type OpenMeteoResponse = {
  current?: {
    time?: unknown;
    temperature_2m?: unknown;
    apparent_temperature?: unknown;
    relative_humidity_2m?: unknown;
    wind_speed_10m?: unknown;
    weather_code?: unknown;
  };
};

const TIMEOUT_MS = 5000;
const MAX_ATTEMPTS = 2;
const RETRY_DELAY_MS = 400;

const url = `https://api.open-meteo.com/v1/forecast?${new URLSearchParams({
  latitude: "-8.0476",
  longitude: "-34.877",
  current: "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
  timezone: "America/Sao_Paulo",
})}`;

const messages: Record<WeatherErrorType, string> = {
  timeout: "O serviço de clima demorou demais para responder.",
  network: "Não foi possível conectar ao serviço de clima.",
  http: "O serviço de clima está indisponível no momento.",
  invalid: "O serviço de clima retornou dados inesperados.",
  unknown: "Não foi possível carregar o clima agora.",
};

class WeatherError extends Error {
  type: WeatherErrorType;
  retryable: boolean;

  constructor(type: WeatherErrorType, detail: string, { retryable = false, cause }: WeatherOptions = {}) {
    super(detail, { cause });
    this.name = "WeatherError";
    this.type = type;
    this.retryable = retryable;
  }
}

const isNumber = (value: unknown): value is number => typeof value === "number" && Number.isFinite(value);

function parseWeather(data: unknown): Weather {
  const current = (data as OpenMeteoResponse | null)?.current;

  if (
    !current ||
    typeof current.time !== "string" ||
    !isNumber(current.temperature_2m) ||
    !isNumber(current.apparent_temperature) ||
    !isNumber(current.relative_humidity_2m) ||
    !isNumber(current.wind_speed_10m) ||
    !isNumber(current.weather_code)
  ) {
    throw new WeatherError("invalid", "Resposta da Open-Meteo sem os campos esperados");
  }

  return {
    temperature: current.temperature_2m,
    feelsLike: current.apparent_temperature,
    humidity: current.relative_humidity_2m,
    windSpeed: current.wind_speed_10m,
    code: current.weather_code,
    time: current.time,
  };
}

async function request(): Promise<Weather> {
  let res: Response;
  try {
    res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS), next: { revalidate: 1800 } });
  } catch (error) {
    const type: WeatherErrorType = error instanceof Error && error.name === "TimeoutError" ? "timeout" : "network";
    throw new WeatherError(type, `Falha ao chamar a Open-Meteo (${type})`, { retryable: true, cause: error });
  }

  if (!res.ok) {
    const retryable = res.status >= 500 || res.status === 429;
    throw new WeatherError("http", `Open-Meteo respondeu com status ${res.status}`, { retryable });
  }

  let data: unknown;
  try {
    data = await res.json();
    console.log(data)
  } catch (error) {
    throw new WeatherError("invalid", "Resposta da Open-Meteo não é um JSON válido", { cause: error });
  }

  return parseWeather(data);
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export async function getWeather(): Promise<WeatherResult> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      return { ok: true, data: await request() };
    } catch (error) {
      lastError = error;
      if (!(error instanceof WeatherError) || !error.retryable) break;
      if (attempt < MAX_ATTEMPTS) await wait(RETRY_DELAY_MS);
    }
  }

  const type: WeatherErrorType = lastError instanceof WeatherError ? lastError.type : "unknown";
  console.error(`[weather] ${type}:`, lastError);
  return { ok: false, error: { type, message: messages[type] } };
}
