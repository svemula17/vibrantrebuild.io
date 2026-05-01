"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import nmsdcSrc from "@/NMSDC_CERIFIED_2024.jpg";
import everifySrc from "@/i-e-verify-seal-v2-600x600.jpg";

const textBadges = [
  { name: "Oracle NetSuite", sub: "Solution Partner", initials: "NS" },
  { name: "Microsoft", sub: "Partner Network", initials: "MS" },
  { name: "Wrike", sub: "Solution Partner", initials: "W" },
  { name: "25 Years", sub: "in Business since 2000", initials: "25" },
];

export function CertificationsBand() {
  return (
    <section className="py-14 bg-white border-y border-line">
      <div className="container">

        <motion.p
          className="text-center text-xs font-bold uppercase tracking-[0.22em] text-muted mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications &amp; Partnerships
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">

          {/* NMSDC */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <Image
              src={nmsdcSrc}
              alt="NMSDC Certified 2024"
              width={72}
              height={72}
              className="h-16 w-auto object-contain"
            />
            <span className="text-xs font-medium text-muted">NMSDC Certified</span>
          </motion.div>

          {/* E-Verify */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="flex flex-col items-center gap-2"
          >
            <Image
              src={everifySrc}
              alt="E-Verify Partner"
              width={72}
              height={72}
              className="h-16 w-auto object-contain"
            />
            <span className="text-xs font-medium text-muted">E-Verify Partner</span>
          </motion.div>

          {/* Divider */}
          <div aria-hidden className="hidden lg:block h-12 w-px bg-line" />

          {/* Text-based partner badges */}
          {textBadges.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.18 + i * 0.08 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="h-16 w-16 rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-card"
                style={{ background: "linear-gradient(135deg, #A33315 0%, #C8401A 60%, #E05A1F 100%)" }}
              >
                {b.initials}
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-navy-700">{b.name}</p>
                <p className="text-xs text-muted">{b.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
