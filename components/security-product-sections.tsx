"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { PRODUCTS } from "@/components/security-products";

/* One full section per product, art on one side and copy on the other,
   alternating. The homepage keeps the compact three-up band; this is the
   expanded treatment for the cybersecurity page, per the design canvas.

   Each product names the lifecycle stage it runs at, so this section and the
   attack-lifecycle spine below it read as one argument rather than two. */

const FACTS: Record<string, { stage: string; facts: string[] }> = {
  kaveo: {
    stage: "Runs at the Detect stage",
    facts: [
      "Read-only role, deployed inside your own account",
      "AWS, Azure, GCP and Kubernetes in one view",
      "Findings become dated, cited evidence artifacts",
      "Nothing egresses: no configuration, no logs, no telemetry"
    ]
  },
  Vectasec: {
    stage: "Runs at the Analyze stage",
    facts: [
      "API gateways, message brokers and service meshes",
      "Authentication gaps and over-broad routing surfaced",
      "Policy drift caught between environments",
      "The layer most scanners never look at"
    ]
  },
  aegis: {
    stage: "Runs at the Respond stage",
    facts: [
      "Authentication and role-based authorization per tool call",
      "Threat filtering and rate limiting at the gateway",
      "Hash-chained audit log you can verify independently",
      "Guardrails in place before agents become load-bearing"
    ]
  }
};

export function SecurityProductSections() {
  const ref = useRef<HTMLElement>(null);

  /* The canvas gates its entrance animation on .is-in so nothing runs
     off-screen, and adds .is-armed from JS so that with JS off the content
     renders at rest instead of stuck at opacity 0. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("is-armed");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "-8%" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="section bg-white sp relative isolate overflow-hidden" id="products">
      <div className="container relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Security products we build</p>
          <h2 className="mt-3">kaveo, Vectasec and aegis. Tools that run inside your estate, not ours.</h2>
          <p className="mt-4 text-muted">
            Three products built by our own engineers, for teams who cannot ship telemetry to a
            vendor cloud. Every finding cites the stored observation that produced it, so auditors
            get evidence rather than dashboard screenshots.
          </p>
        </div>

        {PRODUCTS.map((p, i) => {
          const extra = FACTS[p.name];
          return (
            <div
              key={p.name}
              className={`sp-split mt-14${i % 2 === 1 ? " is-flip" : ""}`}
            >
              <div className="sp-art">
                <div className="rounded-xl border border-line bg-neutral-50 p-5">{p.art}</div>
              </div>

              <div className="sp-copy">
                <div className="sp-lock">
                  <span className="sp-built">Built by Vibrant</span>
                  <p className="sp-name">{p.name}</p>
                  <p className="sp-kind">
                    {p.kind}
                    <span className="sp-dot" aria-hidden>·</span>
                    {p.short}
                  </p>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-navy-700 leading-snug">
                  {p.heading}
                </h3>
                <p className="mt-4 text-base text-muted leading-relaxed">{p.body}</p>

                {extra && (
                  <>
                    <ul className="sp-facts">
                      {extra.facts.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <p className="sp-stage">{extra.stage}</p>
                  </>
                )}

                <div className="mt-6">
                  <Link href="/contact" className="btn-primary">
                    Talk to us about {p.name}&nbsp;→
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
