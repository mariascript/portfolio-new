"use client";

import { useEffect, useState } from "react";
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun,
  type LucideIcon,
} from "lucide-react";
import type { Weather } from "@/lib/weather";

type Condition = { codes: number[]; Icon: LucideIcon };

const conditions: Condition[] = [
  { codes: [0, 1], Icon: Sun },
  { codes: [2], Icon: CloudSun },
  { codes: [3], Icon: Cloud },
  { codes: [45, 48], Icon: CloudFog },
  { codes: [51, 53, 55, 56, 57], Icon: CloudDrizzle },
  { codes: [61, 63, 65, 66, 67], Icon: CloudRain },
  { codes: [71, 73, 75, 77, 85, 86], Icon: CloudSnow },
  { codes: [80, 81, 82], Icon: CloudRain },
  { codes: [95, 96, 99], Icon: CloudLightning },
];

function formatClock(date: Date) {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(date);

  const value = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return `${value("weekday").replace(".", "")}, ${value("day")}/${value("month")} ${value("hour")}:${value("minute")}`;
}

export function WeatherWidget({ weather }: { weather: Weather }) {
  const condition = conditions.find((item) => item.codes.includes(weather.code)) ?? conditions[0];
  const Icon = condition.Icon;

  const [year, month, day] = weather.time.slice(0, 10).split("-").map(Number);
  const weekday = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"][new Date(year, month - 1, day).getDay()];
  const initialClock = `${weekday}, ${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")} ${weather.time.slice(11, 16)}`;

  const [clock, setClock] = useState(initialClock);

  useEffect(() => {
    const update = () => setClock(formatClock(new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-[84px] z-40 px-4">
      <div className="mx-auto flex max-w-5xl justify-end">
        <div className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur-md">
          <Icon size={14} className="text-primary" />
          <span className="text-foreground">{Math.round(weather.temperature)}°C</span>
          <span className="hidden sm:inline">Recife</span>
          <span className="hidden text-muted-foreground/60 sm:inline">·</span>
          <span className="text-lilac">{clock}</span>
        </div>
      </div>
    </div>
  );
}
