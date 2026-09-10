"use client";

import { useEffect } from "react";

/* Feeds the pointer position to CSS as --mx / --my on .vh-left, so the ruled
   grid lights up in a pool around the cursor. rAF-throttled, and it writes
   straight to style rather than through state, so mousemove never triggers a
   React render. Ported from the design canvas.

   Split out of hero.tsx deliberately: the hero itself stays a server component
   and this is the only part that needs the client. */
export function HeroCursor() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // A pointer pool is meaningless on touch, where there is no hover.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const panel = document.querySelector<HTMLElement>(".vh-left");
    if (!panel) return;

    let pending: number | null = null;
    const onMove = (e: MouseEvent) => {
      if (pending) return;
      pending = requestAnimationFrame(() => {
        pending = null;
        const r = panel.getBoundingClientRect();
        panel.style.setProperty("--mx", `${e.clientX - r.left}px`);
        panel.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };

    panel.addEventListener("mousemove", onMove);
    return () => {
      panel.removeEventListener("mousemove", onMove);
      if (pending) cancelAnimationFrame(pending);
    };
  }, []);

  return null;
}
