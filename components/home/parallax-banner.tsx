"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import bgSrc from "@/pexels-rdne-7948005.jpg";

export function ParallaxBanner() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ minHeight: "480px" }}
    >
      {/* ── Fixed background image — stays put while page scrolls ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-parallax"
        style={{ backgroundImage: `url(${bgSrc.src})` }}
      />

      {/* Dark + brand-gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,18,30,0.92) 0%, rgba(163,51,21,0.75) 50%, rgba(10,18,30,0.85) 100%)"
        }}
      />

      {/* Content */}
      <div className="container flex flex-col items-center justify-center text-center text-white py-28 md:py-36">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.24em]"
          style={{ color: "#E8703A" }}
        >
          Celebrating 25 Years
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-4 text-white max-w-3xl"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}
        >
          Your efficiency and bottom line<br className="hidden sm:block" /> is our business.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed"
        >
          Vibrant Inc has been empowering North American enterprises with cloud,
          data, ERP, and managed IT solutions since 2000.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: 0.24 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link href="/contact" className="btn-primary">
            Get a Call Back
          </Link>
          <Link
            href="/about"
            className="btn inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Our story →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
