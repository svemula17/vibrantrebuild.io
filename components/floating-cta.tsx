"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteSettings } from "@/content/site-content";

export function FloatingCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.5, ease: "easeOut" }}
      className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-2"
    >
      {/* Quick-call chip */}
      <a
        href={`tel:${siteSettings.phonePrimary}`}
        className="hidden sm:flex items-center gap-2 rounded-full border border-line bg-white/90 backdrop-blur px-4 py-2 text-xs font-semibold text-navy-700 shadow-card hover:shadow-cardHover transition-shadow"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-sky shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.42 2 2 0 0 1 3.56 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.19a16 16 0 0 0 6.09 6.09l.91-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
        </svg>
        {siteSettings.phonePrimary}
      </a>

      {/* Main CTA button */}
      <Link
        href="/contact"
        className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-cardHover hover:-translate-y-0.5 active:translate-y-0 transition-transform"
        style={{ background: "linear-gradient(135deg, #A33315 0%, #C8401A 60%, #E05A1F 100%)" }}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Get a Call Back
      </Link>
    </motion.div>
  );
}
