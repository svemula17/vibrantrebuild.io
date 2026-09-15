"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/* Once-only scroll reveal: small rise + fade, brand easing.

   This deliberately does NOT use framer-motion's `initial` prop. That prop is
   server-rendered as inline `opacity:0;transform:translateY(18px)`, so the
   content ships invisible and depends on JavaScript to reveal it. On 2026-09-15
   a single corrupt byte range in a shared chunk threw a SyntaxError, no JS ran,
   and 4,278 characters of homepage copy stayed at opacity 0 — a blank page
   caused by an animation.

   The rule here is the same one CapabilityFlow and ServiceReveal already
   follow: the resting state is the visible state. Nothing is hidden in the
   HTML. JavaScript opts an element into the animation by adding .rv, and the
   observer adds .rv-in to play it. No JS, stale JS, broken JS, an old browser,
   reduced motion — every one of those paths ends with the content visible. */
export function Reveal({
  children,
  delay = 0,
  className
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      return; // leave it visible, which is where it already is
    }

    /* Anything on screen at mount is never armed. Arming it would hide copy
       the visitor is already reading for one frame, then fade it back in. */
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.92) return;

    el.classList.add("rv");

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      el.classList.add("rv-in");
      io.disconnect();
      window.clearTimeout(timer);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) show();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    /* If the observer never reports — a zero-area viewport, a hidden tab that
       is then restored oddly — show it anyway rather than leave it hidden. */
    const timer = window.setTimeout(show, 2800);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? ({ "--rv-delay": `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
