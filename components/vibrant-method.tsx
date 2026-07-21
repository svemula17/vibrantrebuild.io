"use client";

import { motion } from "framer-motion";
import { vibrantMethod } from "@/content/site-content";

export function VibrantMethod() {
  return (
    <section className="section-gradient">
      <div className="container">

        <div className="max-w-2xl">
          <p className="eyebrow">Our delivery framework</p>
          <h2 className="mt-3">The VIBRANT Method™ — agile delivery, enterprise accountability.</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Seven letters, seven phases. Every engagement — from a 4-week pilot to a multi-year
            ERP program — runs on the same agile framework: senior-led sprints, weekly demos, and
            outcomes you can measure. It&apos;s how we modernize without disrupting operations.
          </p>
        </div>

        {/* Letter grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {vibrantMethod.map((item, i) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.35, delay: Math.min(i, 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card hover:shadow-cardHover hover:border-sky/40 hover:-translate-y-1 transition-all overflow-hidden"
            >
              {/* Watermark letter */}
              <span
                aria-hidden
                className="absolute -top-2 -right-1 text-7xl font-black leading-none select-none pointer-events-none text-brand-600/[0.06]"
              >
                {item.letter}
              </span>

              {/* Brand letter badge */}
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-lg font-black text-white shadow-sm">
                {item.letter}
              </span>

              <h3 className="mt-4 text-base font-semibold text-navy-700">{item.step}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{item.body}</p>

              {/* Step number */}
              <span className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-700">
                Phase {i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Connector line — desktop only */}
        <div aria-hidden className="hidden xl:block mt-6 mx-auto h-px max-w-5xl bg-neutral-200" />

      </div>
    </section>
  );
}
