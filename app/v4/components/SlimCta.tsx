"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { group, textInSoft } from "../lib/motion";
import { slimCtaData } from "../data/SiteSectionData";

/* A quiet ruled note rather than a full accent band. This strip sits
   between the products grid and the MOQ section, and the MOQ section is
   a dark photographic band — so an accent band here would put two loud
   moments back to back. Dropping to --surface reads as an annotation and
   lets the dark plate that follows land harder. The CTA is an underlined
   link, not a button: three full-width buttons inside one screen of each
   other is hierarchy noise, and the real button lives in the quote CTA
   below. */
export function SlimCta() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="bg-surface"
      aria-labelledby="slim-cta-title"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-5 border-y border-line py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-10 lg:py-6">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-accent"
            />
            <span className="text-[10px] font-medium tracking-[0.2em] text-muted uppercase">
              Planning ahead
            </span>
          </div>

          <motion.h3
            id="slim-cta-title"
            variants={textInSoft}
            className="max-w-xl font-display font-normal text-foreground"
            style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)", lineHeight: 1.2 }}
          >
            {slimCtaData.headline}
          </motion.h3>

          <motion.div variants={textInSoft} className="shrink-0 self-start sm:self-auto">
            <Link
              href={slimCtaData.cta.href}
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              {slimCtaData.cta.label}
              <ArrowRight
                className="h-3.5 w-3.5 text-accent transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:text-ink motion-reduce:transition-none"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
