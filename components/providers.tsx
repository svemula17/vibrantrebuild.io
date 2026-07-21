"use client";

import { MotionConfig } from "framer-motion";

/* Honors prefers-reduced-motion for every framer-motion animation in the
   tree — the CSS guard in globals.css cannot reach framer's JS-driven
   transforms. */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
