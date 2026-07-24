"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/content/site-content";
import { CaseStudyCard } from "@/components/case-study-card";

export function CaseStudies() {
  return (
    <section className="section bg-navy-50/40">
      <div className="container">

        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Client outcomes</p>
            <h2 className="mt-3">Results that show up in the business.</h2>
          </div>
          <Link href="/services" className="btn-ghost shrink-0 self-start sm:self-auto">
            All services →
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.sector}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <CaseStudyCard cs={cs} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
