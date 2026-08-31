"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

/**
 * Left-to-right masked text reveal, one block per line.
 * Reveals once when the container scrolls into view.
 */
export function RevealText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3, margin: "0px 0px -60px 0px" });
  const lines = text.split("\n");

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-1">
          <motion.span
            initial={{ x: "-105%" }}
            animate={inView ? { x: "0%" } : { x: "-105%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.12 }}
            className="inline-block"
          >
            {line || "\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
