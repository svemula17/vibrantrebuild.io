"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

/* The four tiles read as one pipeline rather than four equal features, so they
   light in sequence while the band is on screen. */
const STAGES = ["Detect", "Analyze", "Respond", "Predict"];
const DWELL = 2200;

const features = [
  {
    title: "ML-powered detection",
    body: "Models tuned to your environment cut false positives and catch the anomalies humans miss.",
    icon: "M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1 0 8v1a4 4 0 1 1-8 0v-1a4 4 0 0 1 0-8V6a4 4 0 0 1 4-4zM9 10h.01M15 10h.01M9 14h.01M15 14h.01"
  },
  {
    title: "Behavioral analytics (UEBA)",
    body: "Baselines every user and entity, then flags only the deviations that actually matter.",
    icon: "M3 3v18h18M7 15l4-4 4 4 5-7"
  },
  {
    title: "Automated response",
    body: "Pre-approved playbooks contain threats the moment they're confirmed, day or night, no waiting on a human.",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
  },
  {
    title: "Predictive intelligence",
    body: "Threat feeds and pattern analysis that warn you before attacks land, not after.",
    icon: "M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z"
  }
];

export function AiShieldBand() {
  const ref = useRef<HTMLElement>(null);
  const [live, setLive] = useState(-1);

  /* Only runs while the band is visible — an off-screen interval is just heat. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | null = null;
    const io = new IntersectionObserver((entries) => {
      const visible = entries[0]?.isIntersecting;
      if (visible && timer === null) {
        setLive((i) => (i + 1) % features.length);
        timer = setInterval(() => setLive((i) => (i + 1) % features.length), DWELL);
      } else if (!visible && timer !== null) {
        clearInterval(timer);
        timer = null;
      }
    });
    io.observe(el);
    return () => {
      if (timer !== null) clearInterval(timer);
      io.disconnect();
    };
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden text-white bg-brand-gradient">
      {/* Slow sweep across the band, behind everything else */}
      <div className="ais-scan" aria-hidden />

      {/* Brand radial glow, mirrors stats-band treatment */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            /* The 135deg gradient's light stop (#E05A1F) is bottom-right, where
               white/85 falls to ~3.1:1. The existing dark wash sat bottom-left,
               so the failing corner was unmitigated — this adds one there. */
            "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.08) 0%, transparent 45%), radial-gradient(circle at 5% 95%, rgba(60,10,0,0.28) 0%, transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(90,25,4,0.40) 0%, transparent 62%)"
        }}
      />

      <div className="container relative py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left, copy */}
          <div>
            <Reveal>
              <p className="text-eyebrow uppercase text-white/90 inline-flex items-center gap-2.5">
                Featured platform
                <span className="ais-live" aria-hidden />
              </p>
              <h2 className="mt-3 text-white">
                AI Shield™, security that thinks faster than attackers.
              </h2>
              <p className="mt-5 text-white/90 leading-relaxed">
                Our proprietary detection-and-response capability uses machine learning and
                behavioral analytics to spot what rule-based tools miss, and neutralize it in
                minutes, not hours.
              </p>
            </Reveal>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white/90">
              <span>Threats contained in minutes</span>
              <span className="hidden sm:inline text-white/60" aria-hidden="true">·</span>
              <span>Fewer false positives</span>
              <span className="hidden sm:inline text-white/60" aria-hidden="true">·</span>
              <span>Audit-ready reporting</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/services/cybersecurity" className="btn-outline-light">
                Explore AI Shield →
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
              >
                See it in action →
              </Link>
            </div>
          </div>

          {/* Right, feature tiles */}
          <div className="grid sm:grid-cols-2 gap-4 ais-cards">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group card-dark p-6 hover:bg-white/15 hover:border-white/40 transition-all${
                  live === i ? " is-live" : ""
                }`}
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-white group-hover:bg-white group-hover:text-brand-700 transition-colors">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 text-sm font-semibold text-white leading-snug">{f.title}</h3>
                <p className="mt-2 text-sm text-white/90 leading-relaxed">{f.body}</p>
                <span className="ais-stage" aria-hidden>{STAGES[i]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
