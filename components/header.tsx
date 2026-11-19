"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-border bg-card/70 px-4 py-3 backdrop-blur-md md:px-6">
        <Link href="/" aria-label="Início" className="shrink-0">
          <Image src="/logo.png" alt="MP" width={80} height={32} className="h-8 w-auto" priority />
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto font-mono text-xs">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "whitespace-nowrap rounded-full px-3 py-1.5 transition-colors duration-300 active:scale-95",
                pathname === item.href
                  ? "bg-primary/15 text-lilac"
                  : "text-muted-foreground hover:bg-foreground/5 hover:text-lilac"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
