"use client";

import type { Variants } from "motion/react";

/**
 * Cards slide up from a large offset, and scale in slightly, so they
 * feel like they are being pulled up from far down the page.
 */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 110, scale: 0.96 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/**
 * Generic fade/slide for prose blocks.
 */
export const blockVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};
