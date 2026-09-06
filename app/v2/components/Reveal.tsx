"use client";
import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "right",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "right" | "bottom";
}) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });

  const initial = direction === "right" ? { opacity: 0, x: 40 } : { opacity: 0, y: 24 };
  const animate = direction === "right" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={visible ? animate : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
