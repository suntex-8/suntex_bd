"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { group, rule, textIn, textInSoft } from "@/lib/motion";
import { quoteCtaData } from "@/data/SiteSectionData";
import { heroSectionData } from "@/data/HeroSectionData";

/* Modelled on the artefact this business actually runs on: a costing
   sheet. The buyer sends three inputs, we return three outputs, so the
   section teaches the reader what the exchange is before it asks for it.

   This replaces an earlier version that led with a tracked eyebrow, an
   oversized headline and three oversized yellow numbers. Those numbers
   repeated 500 pcs / 1 week / 5 stages verbatim from the MOQ, lead-time
   and quality sections, and the eyebrow told the reader nothing they
   couldn't already infer from the heading.

   Sits on the second hero plate with the MOQ band's scrim recipe. The
   wash runs heavier on the right than MOQ's does, because this content
   spans both columns down to 13px labels and needs an even floor. */

const plate = heroSectionData.slides[1].image;

const COLUMNS = [
  { key: "youSend", label: "You send" },
  { key: "weReturn", label: "We return" },
] as const;

export function QuoteCta() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="relative isolate overflow-hidden bg-ink py-16 text-white lg:py-24"
      aria-labelledby="quote-cta-title"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src={plate}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/85 via-ink/70 to-ink/55" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
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
              <Button
                href={quoteCtaData.cta.href}
                className="ring-1 ring-white/20"
              >
                {quoteCtaData.cta.label}
              </Button>

              <p className="mt-5 text-[13px] text-white/60">
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
                  <p className="py-4 text-[13px] font-semibold text-white/60">
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
