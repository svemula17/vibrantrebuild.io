"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

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
    body: "Pre-approved playbooks contain threats the moment they're confirmed — day or night, no waiting on a human.",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
  },
  {
    title: "Predictive intelligence",
    body: "Threat feeds and pattern analysis that warn you before attacks land, not after.",
    icon: "M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z"
  }
];

export function AiShieldBand() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* Brand radial glow, mirrors stats-band treatment */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 85% 20%, rgba(200,64,26,0.30) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(163,51,21,0.22) 0%, transparent 55%)"
        }}
      />

      <div className="container relative py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — copy */}
          <div>
            <Reveal>
              <p className="eyebrow-on-dark">Featured platform</p>
              <h2 className="mt-3 text-white">
                AI Shield™ — security that thinks faster than attackers.
              </h2>
              <p className="mt-5 text-white/70 leading-relaxed">
                Our proprietary detection-and-response capability uses machine learning and
                behavioral analytics to spot what rule-based tools miss — and neutralize it in
                minutes, not hours.
              </p>
            </Reveal>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white/60">
              <span>Threats contained in minutes</span>
              <span className="text-brand-400" aria-hidden="true">·</span>
              <span>Fewer false positives</span>
              <span className="text-brand-400" aria-hidden="true">·</span>
              <span>Audit-ready reporting</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/services/ai-shield" className="btn-outline-light">
                Explore AI Shield →
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
              >
                See it in action →
              </Link>
            </div>
          </div>

          {/* Right — feature tiles */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group card-dark p-6 hover:bg-white/10 hover:border-brand-600/40 transition-all"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600/20 text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 text-sm font-semibold text-white leading-snug">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
