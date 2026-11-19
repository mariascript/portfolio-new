import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { WeatherWidget } from "@/components/weather-widget";
import { getWeather } from "@/lib/weather";
import "./globals.css";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Maria Pereira | Desenvolvedora Full Stack",
  description: "Portfólio e currículo de Maria Pereira, desenvolvedora Full Stack em Recife.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const result = await getWeather();
  const weather = result.ok ? result.data : null;

  return (
    <html lang="pt-BR" className="dark">
      <body className={`${sans.variable} ${mono.variable} relative min-h-screen`}>
        <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[70vh] bg-[radial-gradient(ellipse_at_top,hsl(270_80%_30%/0.35),transparent_70%)]" />
        <Header />
        {weather && <WeatherWidget weather={weather} />}
        <main className="mx-auto max-w-5xl px-6 pb-16 pt-32">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
