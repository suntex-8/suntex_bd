"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { group, rule, textIn, textInSoft } from "@/lib/motion";
import { quoteCtaData } from "@/data/SiteSectionData";

/* Modelled on the artefact this business actually runs on: a costing
   sheet. The buyer sends three inputs, we return three outputs, so the
   section teaches the reader what the exchange is before it asks for it.

   This replaces an earlier version that led with a tracked eyebrow, an
   oversized headline and three oversized yellow numbers. Those numbers
   repeated 500 pcs / 1 week / 5 stages verbatim from the MOQ, lead-time
   and quality sections, and the eyebrow told the reader nothing they
   couldn't already infer from the heading. */

const COLUMNS = [
  { key: "youSend", label: "You send" },
  { key: "weReturn", label: "We return" },
] as const;

export function QuoteCta() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="bg-ink py-20 text-white lg:py-28"
      aria-labelledby="quote-cta-title"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ---- Ask ---- */}
          <div className="lg:col-span-6">
            <motion.h2
              id="quote-cta-title"
              variants={textIn}
              className="text-white"
              style={{ fontSize: "clamp(2.05rem, 4.6vw, 3.25rem)", lineHeight: 1.1 }}
            >
              {quoteCtaData.headline}
            </motion.h2>

            <motion.p
              variants={textInSoft}
              className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-white/65"
            >
              {quoteCtaData.intro}
            </motion.p>

            <motion.div variants={textInSoft} className="mt-9">
              <Link
                href={quoteCtaData.cta.href}
                className="group inline-flex min-h-12 items-center gap-4 rounded-xl bg-accent py-3.5 pr-3.5 pl-7 text-sm font-semibold text-foreground transition duration-300 hover:bg-yellow active:translate-y-px"
              >
                {quoteCtaData.cta.label}
                {/* The arrow is a separate element that swaps to ink on
                    hover rather than a glyph appended to the label. */}
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-foreground/10 transition-colors duration-300 group-hover:bg-foreground group-hover:text-accent"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
                </span>
              </Link>

              <p className="mt-5 text-[13px] text-white/45">
                {quoteCtaData.assurance}
              </p>
            </motion.div>
          </div>

          {/* ---- Exchange ---- */}
          <motion.div variants={textInSoft} className="lg:col-span-6 lg:pt-1">
            <motion.span
              variants={rule}
              className="block h-px w-full origin-left bg-white/15"
            />

            <div className="grid grid-cols-2">
              {COLUMNS.map((column, ci) => (
                <div
                  key={column.key}
                  className={ci === 1 ? "border-l border-white/10 pl-5 sm:pl-8" : "pr-5 sm:pr-8"}
                >
                  <p className="py-4 text-[13px] font-semibold text-white/45">
                    {column.label}
                  </p>

                  <ul>
                    {quoteCtaData[column.key].map((row) => (
                      <li
                        key={row}
                        className="border-t border-white/10 py-3.5 text-[15px] leading-snug text-white/85"
                      >
                        {row}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
