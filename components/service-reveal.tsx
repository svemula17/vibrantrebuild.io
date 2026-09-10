"use client";

import { useEffect } from "react";

/* Sections on the service pages fade up as they arrive. The observer is the
   primary path; the 2.8s timer is the fallback, because a short page can put
   every section inside the viewport at load, and a browser without
   IntersectionObserver would otherwise leave the whole page at opacity 0.
   Reveal-on-scroll must never be the reason content cannot be read. */
export function ServiceReveal() {
  useEffect(() => {
    const main = document.getElementById("main");
    if (!main) return;
    /* The hero is above the fold on arrival — fading it in would mean the
       first thing a visitor sees is the page assembling itself. */
    const sections = Array.from(main.querySelectorAll<HTMLElement>(":scope > section")).slice(1);
    if (!sections.length) return;

    /* If we reach here via the timer the observer never reported, so the
       reveal is already broken — show the content outright rather than
       starting a 0.6s fade the page may not be in a state to run. */
    const showAll = (instant = false) =>
      sections.forEach((s) => {
        if (instant) s.style.transition = "none";
        s.classList.add("is-in");
      });

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      showAll();
      return;
    }

    sections.forEach((s) => s.classList.add("svc-rev"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    const timer = window.setTimeout(() => showAll(true), 2800);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
