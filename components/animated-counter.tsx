"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function AnimatedCounter({ value, suffix = "", duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  // Start at the real value, animate only after first hydrated client render.
  // hasAnimated must be a ref, not state: putting it in state (and in the deps)
  // re-runs this effect the moment it flips, and the cleanup cancels the rAF
  // loop before its first tick, leaving every counter frozen at 0.
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.visibilityState === "hidden"
    ) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    setDisplay(0);
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
