import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("border border-border bg-card p-6 transition-all hover:border-primary/60 hover:shadow-glow", className)}
      {...props}
    />
  );
}
