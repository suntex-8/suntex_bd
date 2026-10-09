"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeftRight, FileText, Package } from "lucide-react";
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

const EXCHANGE = [
  {
    key: "youSend",
    label: "You send",
    icon: FileText,
    accent: "text-sky-300",
    chip: "bg-sky-400/10 border-sky-400/20",
  },
  {
    key: "weReturn",
    label: "We return",
    icon: Package,
    accent: "text-amber-300",
    chip: "bg-amber-400/10 border-amber-400/20",
  },
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

            <div className="relative mt-2 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {EXCHANGE.map((col, ci) => {
                const Icon = col.icon;
                return (
                  <motion.div
                    key={col.key}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.12, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className={`relative rounded-2xl border p-5 sm:p-6 ${col.chip}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl border ${col.chip}`}>
                        <Icon className={`h-4 w-4 ${col.accent}`} />
                      </span>
                      <span className="text-[13px] font-semibold tracking-wide text-white/70 uppercase">
                        {col.label}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-3">
                      {quoteCtaData[col.key].map((row, ri) => (
                        <li key={row} className="flex items-start gap-2.5 text-[14px] leading-snug text-white/85">
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${ci === 0 ? "bg-sky-400/60" : "bg-amber-400/60"}`} />
                          {row}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 sm:flex"
                aria-hidden="true"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink shadow-lg shadow-black/40">
                  <ArrowLeftRight className="h-4 w-4 text-white/70" />
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
