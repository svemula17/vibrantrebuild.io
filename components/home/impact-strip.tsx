"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RevealWords } from "@/components/reveal-on-scroll";

const tiles = [
  {
    title: "We show up",
    body: "Founder-led Rotary projects and employee volunteer days in the places we live and work."
  },
  {
    title: "Lighter footprint",
    body: "Remote-first delivery that cuts commute emissions — measured, tracked, reduced."
  },
  {
    title: "Everyone belongs",
    body: "NMSDC Certified MBE. Diverse teams build better technology. Full stop."
  },
  {
    title: "Next-gen ready",
    body: "Mentoring emerging technologists and backing STEM pathways for the builders of tomorrow."
  }
];

export function ImpactStrip() {
  return (
    <section className="section-gradient">
      <div className="container">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="eyebrow">Tech for good</p>
          <h2 className="mt-3">
            <RevealWords text="Good business. Better world." />
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We&apos;ve never believed profit and purpose are rivals. For 25 years Vibrant has
            shown up — for our communities, our people, and the planet — and we&apos;re just
            getting started.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-2xl border border-line bg-white p-6 shadow-card hover:shadow-cardHover hover:border-sky/30 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-base font-semibold text-navy-700">{t.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/social-responsibility" className="btn-ghost inline-flex items-center gap-2">
            See how we give back
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
