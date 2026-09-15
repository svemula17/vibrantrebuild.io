"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/content/site-content";
import { CaseStudyCard } from "@/components/case-study-card";

export function CaseStudies() {
  /* Pick-one row, per the design canvas: first card leads on load. */
  const [active, setActive] = useState(0);

  return (
    <section className="section bg-white">
      <div className="container">

        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Client outcomes</p>
            <h2 className="mt-3">Results that show up in the business.</h2>
          </div>
          <div className="flex flex-col items-start gap-3 shrink-0 sm:items-end">
            <Link href="/services" className="btn-ghost">
              All services →
            </Link>
            <p className="inline-flex items-center gap-1.5 text-xs text-muted">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Named references available on request
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal
              key={cs.sector}
              delay={i * 0.06}
              className="h-full"
            >
              <CaseStudyCard cs={cs} active={i === active} onSelect={() => setActive(i)} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
