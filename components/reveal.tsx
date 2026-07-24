"use client";

import { motion } from "framer-motion";

/* Once-only scroll reveal: small rise + fade, brand easing. Safe to render
   from server components. MotionConfig reducedMotion="user" (providers.tsx)
   neutralizes the movement for reduced-motion users. */
export function Reveal({
  children,
  delay = 0,
  className
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
