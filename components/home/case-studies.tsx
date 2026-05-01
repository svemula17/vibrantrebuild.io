"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    sector: "Healthcare",
    challenge:
      "Fragmented on-prem data across 12 hospitals preventing unified executive reporting",
    result:
      "Unified data platform on Azure with automated pipelines — leadership now has one source of truth.",
    metric: "60%",
    metricLabel: "faster reporting",
    service: "Cloud Modernization",
    slug: "cloud-modernization",
  },
  {
    sector: "Manufacturing",
    challenge:
      "Legacy ERP with manual workarounds causing significant inventory write-offs annually",
    result:
      "NetSuite implementation delivered on time and under budget — full ROI realized within 14 months.",
    metric: "$2M+",
    metricLabel: "annual savings",
    service: "ERP Optimization",
    slug: "erp-optimization",
  },
  {
    sector: "Financial Services",
    challenge:
      "No single source of truth for risk reporting — over 40 manual spreadsheets compiled weekly",
    result:
      "Power BI + Snowflake platform with automated data pipelines eliminated manual aggregation entirely.",
    metric: "90%",
    metricLabel: "less manual effort",
    service: "Data & Analytics",
    slug: "data-analytics",
  },
];

export function CaseStudies() {
  return (
    <section className="section bg-navy-50/40">
      <div className="container">

        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55 }}
        >
          <div className="max-w-xl">
            <p className="eyebrow">Client outcomes</p>
            <h2 className="mt-3">Results that show up in the business.</h2>
          </div>
          <Link href="/services" className="btn-ghost shrink-0 self-start sm:self-auto">
            All services →
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.sector}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-line bg-white p-8 shadow-card hover:shadow-cardHover hover:border-sky/30 transition-all overflow-hidden"
            >
              {/* Watermark metric */}
              <span
                aria-hidden
                className="absolute -top-3 -right-2 text-8xl font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(200,64,26,0.06)" }}
              >
                {cs.metric}
              </span>

              {/* Left accent line */}
              <span
                className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: "linear-gradient(to bottom, #C8401A, #E05A1F)" }}
              />

              {/* Sector pill */}
              <span className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold bg-sky/10 text-sky">
                {cs.sector}
              </span>

              {/* Metric */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-navy-700">{cs.metric}</span>
                <span className="text-sm text-muted">{cs.metricLabel}</span>
              </div>

              <p className="mt-3 text-sm text-muted leading-relaxed italic">
                &ldquo;{cs.challenge}&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-navy-700 leading-relaxed flex-1">
                {cs.result}
              </p>

              <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#C8401A" }}>
                  {cs.service}
                </span>
                <Link
                  href={`/services/${cs.slug}`}
                  className="text-xs font-semibold text-sky inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
