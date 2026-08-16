"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, type CSSProperties } from "react";

/* The catalogue as a pipeline: stages left to right, plus a rail underneath
   for the service that runs across all of them. Styles live in globals.css
   under "Capability flow".

   The draw-on is armed here rather than in CSS so the flow renders in its
   resting state without JS, and so reduced-motion users never see the
   pre-animation state at all. */

export type FlowNode = { slug: string; title: string; iconPath: string };
export type FlowStage = { label: string; nodes: FlowNode[] };
export type FlowRail = { slug: string; index: string; title: string; description: string };

export function CapabilityFlow({
  stages,
  rail,
  className
}: {
  stages: FlowStage[];
  rail: FlowRail;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("is-armed");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          entry.target.classList.add("is-in");
        }
      },
      { rootMargin: "-5% 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Stagger index runs across stages, not within one. */
  let order = 0;

  return (
    <div ref={ref} className={["fw fw-map", className].filter(Boolean).join(" ")}>
      <div className="fw-flow">
        {stages.map((stage, i) => (
          <Fragment key={stage.label}>
            {i > 0 && (
              <div className="fw-link" aria-hidden="true">
                <span className="fw-dash" />
                <span className="fw-tip" />
              </div>
            )}
            <div className="fw-stage">
              <div className="fw-head">
                <span className="fw-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="fw-stage-label">{stage.label}</span>
              </div>
              {stage.nodes.map((node) => (
                <Link
                  key={node.slug}
                  href={`/services/${node.slug}`}
                  className="fw-node"
                  style={{ "--d": order++ } as CSSProperties}
                >
                  <span className="fw-ico">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={node.iconPath} />
                    </svg>
                  </span>
                  <h3 className="fw-t">{node.title}</h3>
                </Link>
              ))}
            </div>
          </Fragment>
        ))}
      </div>

      <div className="fw-rail">
        <Link href={`/services/${rail.slug}`} className="fw-railcard">
          <span className="fw-railnum">{rail.index}</span>
          <span className="fw-railbody">
            <span className="fw-railtitle">
              {rail.title}
              <span className="fw-pulse" aria-hidden="true" />
            </span>
            <span className="fw-raildesc">{rail.description}</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
