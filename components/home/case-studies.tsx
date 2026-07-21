"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    sector: "Global Manufacturer",
    challenge:
      "Aging SAP ECC blocking innovation, with 200+ heavily customized objects making upgrades risky",
    result:
      "SAP S/4HANA brownfield migration with custom-code cleanup — clean core achieved, go-live on time.",
    metric: "40%",
    metricLabel: "faster month-end close",
    service: "SAP S/4HANA",
    slug: "sap-s4hana-implementation",
  },
  {
    sector: "Retail Distributor",
    challenge:
      "Warehouse operations relying on manual processes — picking errors and inventory inaccuracy growing",
    result:
      "SAP EWM rollout across 8 distribution centers with mobile RF integration and automated cycle counting.",
    metric: "$3M+",
    metricLabel: "annual savings",
    service: "Supply Chain Solutions",
    slug: "sap-supply-chain",
  },
  {
    sector: "Healthcare Network",
    challenge:
      "Fragmented on-prem data across 12 hospitals preventing unified executive reporting",
    result:
      "Unified data platform on Azure with automated pipelines — leadership now has one source of truth.",
    metric: "60%",
    metricLabel: "faster reporting",
    service: "Cloud Modernization",
    slug: "cloud-modernization",
  },
];

export function CaseStudies() {
  return (
    <section className="section bg-navy-50/40">
      <div className="container">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Client outcomes</p>
            <h2 className="mt-3">Results that show up in the business.</h2>
          </div>
          <Link href="/services" className="btn-ghost shrink-0 self-start sm:self-auto">
            All services →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.sector}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-2xl border border-line bg-white p-8 shadow-card hover:shadow-cardHover hover:border-sky/30 transition-all overflow-hidden"
            >
              {/* Watermark metric */}
              <span
                aria-hidden
                className="absolute -top-3 -right-2 text-8xl font-black leading-none select-none pointer-events-none text-brand-600/[0.06]"
              >
                {cs.metric}
              </span>

              {/* Left accent line */}
              <span className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-brand-600 transition-all duration-300 opacity-0 group-hover:opacity-100" />

              {/* Sector pill */}
              <span className="chip-accent">
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
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {cs.service}
                </span>
                <Link
                  href={`/services/${cs.slug}`}
                  className="text-xs font-semibold text-brand-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
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
