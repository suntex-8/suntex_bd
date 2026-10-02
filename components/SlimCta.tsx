"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { group, textInSoft } from "@/lib/motion";
import { slimCtaData } from "@/data/SiteSectionData";

/* A quiet ruled note rather than a full accent band. This strip sits
   between the products grid and the MOQ section, and the MOQ section
   opens on a yellow ribbon — so a yellow band here put two loud moments
   back to back. Dropping to --surface reads as an annotation and lets the
   ribbon that follows land harder. The CTA is an underlined link, not a
   button: three full-width buttons inside one screen of each other is
   hierarchy noise, and the real button lives in the quote CTA below. */
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
        <div className="flex flex-col gap-x-10 gap-y-4 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between lg:py-7">
          <motion.h3
            id="slim-cta-title"
            variants={textInSoft}
            className="font-semibold text-foreground"
            style={{ fontSize: "1.0625rem", lineHeight: 1.4 }}
          >
            {slimCtaData.headline}
          </motion.h3>

          <motion.div variants={textInSoft} className="shrink-0 self-start sm:self-auto">
            <Link
              href={slimCtaData.cta.href}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <span className="relative">
                {slimCtaData.cta.label}
                {/* The rule grows from the left on hover, so the target
                    of the action is visible before it's taken. */}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-0 motion-reduce:transition-none" />
              </span>
              <ArrowUpRight
                className="h-4 w-4 text-accent transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
