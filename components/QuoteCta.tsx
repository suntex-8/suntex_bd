"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { group, rule, textIn, textInSoft } from "@/lib/motion";
import { quoteCtaData } from "@/data/SiteSectionData";

export function QuoteCta() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="bg-ink py-20 text-white lg:py-28"
      aria-labelledby="quote-cta-title"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.span
          variants={textInSoft}
          className="inline-flex items-center gap-3 text-sm font-semibold text-white/55"
        >
          <span className="h-px w-8 bg-accent" />
          {quoteCtaData.subTitle}
        </motion.span>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <motion.h2
            id="quote-cta-title"
            variants={textIn}
            className="text-[clamp(2.25rem,5.4vw,3.75rem)] text-white lg:col-span-7"
          >
            {quoteCtaData.headline}
          </motion.h2>

          <motion.div variants={textInSoft} className="lg:col-span-5 lg:pb-2">
            <p className="max-w-md text-[15px] leading-relaxed text-white/65">
              {quoteCtaData.paragraph}
            </p>

            <Link
              href={quoteCtaData.cta.href}
              className="btn-brand group mt-8 rounded-xl px-7 py-4 text-sm font-semibold"
            >
              {quoteCtaData.cta.label}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>

        <motion.span
          variants={rule}
          className="mt-16 block h-px w-full origin-left bg-white/12"
        />

        <dl className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {quoteCtaData.commitments.map((item) => (
            <motion.div key={item.value} variants={textInSoft}>
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="font-display block text-3xl font-semibold text-accent lg:text-4xl">
                  {item.value}
                </span>
                <span className="mt-3 block max-w-[26ch] text-sm leading-snug text-white/60">
                  {item.label}
                </span>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </motion.section>
  );
}