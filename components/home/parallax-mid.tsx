"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import bgSrc from "@/pexels-tima-miroshnichenko-5380596.jpg";

export function ParallaxMid() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ minHeight: "420px" }}
    >
      {/* Fixed background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-parallax"
        style={{ backgroundImage: `url(${bgSrc.src})` }}
      />

      {/* Dark overlay — deep navy to brand orange-red */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(120deg, rgba(10,18,30,0.94) 0%, rgba(100,30,10,0.80) 55%, rgba(10,18,30,0.90) 100%)"
        }}
      />

      {/* Content */}
      <div className="container flex flex-col items-center justify-center text-center text-white py-24 md:py-32">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.24em]"
          style={{ color: "#E8703A" }}
        >
          Senior-Led · Onshore + Offshore · 25 Years Strong
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-4 text-white max-w-3xl"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", lineHeight: 1.15 }}
        >
          Depth, ownership, and accountability — on every engagement.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-5 max-w-xl text-base text-white/70 leading-relaxed"
        >
          From discovery to go-live and beyond — Vibrant's senior architects, functional leads,
          and delivery managers take full ownership of every outcome.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: 0.24 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link href="/about" className="btn-primary">
            About Vibrant
          </Link>
          <Link
            href="/contact"
            className="btn inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Talk to an expert →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
