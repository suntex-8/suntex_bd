/* =====================================================================
 * SHARED MOTION
 * ---------------------------------------------------------------------
 * One source of truth for the site's entrance choreography so sections
 * don't drift apart. Currently on v1: text slides in from the left,
 * imagery slides up from below.
 * ===================================================================== */

import type { Variants } from "motion/react";

export const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* Images hold back half a second so the copy lands first and the
   picture supports it rather than competing. */
export const IMAGE_DELAY = 0.5;

/* Parent orchestration. Children inherit `show` through variant
   propagation, so a section only needs `variants={group}` +
   `whileInView="show"`. */
export const group: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

/* Text: enters from the left. */
export const textIn: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

/* A quieter text entrance for long paragraphs — less travel, longer fade. */
export const textInSoft: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

/* Media: rises from below, delayed. */
export const imageIn: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay: IMAGE_DELAY },
  },
};

/* Hairline rules that draw themselves in. */
export const rule: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.85, ease: EASE } },
};
