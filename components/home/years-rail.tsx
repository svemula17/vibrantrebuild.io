"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/* The company's age as a drawn timeline: the fill sweeps, the knob rides it,
   and the year counts up. Decorative — the same facts are in the prose beside
   it — so the whole thing is hidden from assistive tech.

   Ticks land every five years, labelled on the decades and at both ends. */

const STEP = 5;
const DURATION = 1900;

export function YearsRail({ foundedYear, currentYear }: { foundedYear: number; currentYear: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [year, setYear] = useState(currentYear);
  const span = currentYear - foundedYear;

  /* Stop two years short so the last step can't crowd the end label */
  const ticks: number[] = [];
  for (let y = foundedYear; y <= currentYear - 2; y += STEP) ticks.push(y);
  ticks.push(currentYear);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("is-armed");
    setYear(foundedYear);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          entry.target.classList.add("is-in");

          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / DURATION);
            const eased = 1 - Math.pow(1 - p, 3);
            setYear(Math.round(foundedYear + span * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { rootMargin: "-8% 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [foundedYear, span]);

  return (
    <div ref={ref} className="ab-rail" aria-hidden="true">
      <div className="ab-readout">
        <span className="ab-count">{year}</span>
        <span className="ab-unit">{span} years, one owner, same standard</span>
      </div>
      <div className="ab-track">
        <span className="ab-fill" />
        <span className="ab-knob" />
        {ticks.map((y, i) => {
          const isMajor = y % 10 === 0 || y === currentYear || y === foundedYear;
          const edge = y === foundedYear ? " is-first" : y === currentYear ? " is-last" : "";
          return (
            <span
              key={y}
              className={`ab-tick${isMajor ? " is-major" : ""}${edge}`}
              style={{ left: `${(((y - foundedYear) / span) * 100).toFixed(1)}%`, "--t": i } as CSSProperties}
            >
              {isMajor ? <i>{y}</i> : null}
            </span>
          );
        })}
      </div>
    </div>
  );
}
