import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-flex items-center border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs text-lilac", className)}
      {...props}
    />
  );
}
