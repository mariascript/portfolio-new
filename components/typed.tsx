"use client";

import { useEffect, useState } from "react";

type TypedProps = {
  text: string;
  speed?: number;
  cursor?: boolean;
};

export function Typed({ text, speed = 45, cursor = true }: TypedProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    if (count >= text.length) return;
    const id = setTimeout(() => setCount((value) => value + 1), speed);
    return () => clearTimeout(id);
  }, [count, text, speed]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        {cursor && <span className="animate-pulse text-primary">|</span>}
      </span>
    </>
  );
}
