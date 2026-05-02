"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import nmsdcBadge from "@/NMSDC_CERIFIED_2024.jpg";
import everifyBadge from "@/i-e-verify-seal-v2-600x600.jpg";

const textBadges = [
  { label: "25 Years", sub: "of trusted delivery" },
  { label: "Oracle NetSuite", sub: "Solution Partner" },
  { label: "Wrike", sub: "Solution Partner" }
];

const imageBadges = [
  { src: nmsdcBadge,    alt: "NMSDC Certified MBE 2024",   sub: "Certified MBE" },
  { src: everifyBadge,  alt: "E-Verify Partner",            sub: "E-Verify Partner" }
];

export function TrustBadges() {
  return (
    <section className="bg-white border-y border-line">
      <div className="container py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Trusted partnerships &amp; certifications
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">

          {/* Real certification image badges */}
          {imageBadges.map((b, i) => (
            <motion.div
              key={b.alt}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex flex-col items-center justify-center rounded-xl border border-line bg-white px-5 py-4 hover:border-sky/40 hover:shadow-sm transition-all"
            >
              <Image
                src={b.src}
                alt={b.alt}
                height={72}
                width={72}
                className="object-contain"
              />
              <span className="mt-2 text-[11px] font-medium text-muted">{b.sub}</span>
            </motion.div>
          ))}

          {/* Text-based badges for non-image certifications */}
          {textBadges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i + imageBadges.length) * 0.06 }}
              className="flex flex-col items-center justify-center rounded-xl border border-line bg-white px-6 py-5 text-center hover:border-sky/40 hover:shadow-sm transition-all min-w-[130px]"
            >
              <span className="text-base font-bold text-navy-700">{b.label}</span>
              <span className="mt-1 text-xs text-muted">{b.sub}</span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
