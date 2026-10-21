"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { leadTimeData } from "../data/SiteSectionData";
import { HEADER_DELAY } from "../lib/motion";

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: HEADER_DELAY } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const draw: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1, ease: EASE, delay: 0.2 } },
};

/* Axis: 0 = today, 100 = 1 month. Bars show each case's range.
   They are illustrative, not exact durations. */
const TICKS = [
  { at: 0, label: "Order" },
  { at: 25, label: "1 week" },
  { at: 50, label: "2 weeks" },
  { at: 75, label: "3 weeks" },
  { at: 100, label: "1 month" },
];

const ROWS = [
  { who: "Smaller order", what: "Repeat style", time: "As fast as 1 week", from: 0, to: 25, tone: "fast" },
  { who: "Smaller order", what: "New development", time: "1 week – 1 month", from: 25, to: 100, tone: "mid" },
  { who: "Larger order", what: "Repeat style", time: "1 week – 1 month", from: 25, to: 100, tone: "mid" },
  { who: "Larger order", what: "New development", time: "Up to 1 month", from: 0, to: 100, tone: "long" },
] as const;

const BAR: Record<(typeof ROWS)[number]["tone"], string> = {
  fast: "bg-blue-600",
  mid: "bg-blue-800/30",
  long: "bg-gradient-to-r from-[#070D1D] to-[#1E3A8A]",
};

export function LeadTime() {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id="lead-time"
      className="bg-background py-14 sm:py-16 lg:py-20"
      variants={group}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.p
              variants={rise}
              className="flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-muted uppercase"
            >
              <span className="h-px w-8 bg-accent" />
              {leadTimeData.subTitle}
            </motion.p>

            <motion.h2
              variants={rise}
              className="mt-4 font-light text-foreground"
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
              }}
            >
              1 week <span className="text-muted/60">to</span> 1 month.
            </motion.h2>
          </div>

          <motion.p
            variants={rise}
            className="max-w-[32ch] text-[15px] leading-[1.7] font-light text-muted lg:pb-2"
          >
            How fast we deliver depends on the size of your order and whether
            the style is new.
          </motion.p>
        </div>

        {/* Axis labels (desktop) */}
        <motion.div
          variants={rise}
          className="mt-12 hidden lg:grid lg:grid-cols-[240px_1fr] lg:gap-10"
        >
          <span />
          <div className="relative h-5">
            {TICKS.map((t) => (
              <span
                key={t.label}
                className={`absolute top-0 text-[10px] tracking-[0.18em] text-muted uppercase ${
                  t.at === 0
                    ? ""
                    : t.at === 100
                      ? "-translate-x-full"
                      : "-translate-x-1/2"
                }`}
                style={{ left: `${t.at}%` }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Rows */}
        <ul className="mt-8 lg:mt-3">
          {ROWS.map((r) => (
            <motion.li
              key={`${r.who}-${r.what}`}
              variants={rise}
              className="grid gap-3 border-t border-line py-5 last:border-b lg:grid-cols-[240px_1fr] lg:items-center lg:gap-10 lg:py-6"
            >
              <p className="text-[11px] leading-relaxed font-medium tracking-[0.16em] text-foreground uppercase">
                {r.who}
                <span className="block font-light text-muted">{r.what}</span>
              </p>

              <div>
                <p
                  className="font-display font-light text-foreground"
                  style={{
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {r.time}
                </p>

                {/* Track with week ticks */}
                <div
                  aria-hidden="true"
                  className="relative mt-3 h-[6px] rounded-full bg-blue-700/15"
                >
                  {TICKS.slice(1, -1).map((t) => (
                    <span
                      key={t.label}
                      className="absolute top-1/2 h-3 w-px -translate-y-1/2 bg-blue-700/20"
                      style={{ left: `${t.at}%` }}
                    />
                  ))}
                  <motion.span
                    variants={draw}
                    className={`absolute inset-y-0 origin-left rounded-full ${BAR[r.tone]}`}
                    style={{ left: `${r.from}%`, width: `${r.to - r.from}%` }}
                  />
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Footer line */}
        <motion.div
          variants={rise}
          className="mt-6 flex flex-col gap-3 text-xs font-light text-muted sm:flex-row sm:items-center sm:justify-between"
        >
          <span>Every order is different. Final timing is confirmed on inquiry.</span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 border-b border-accent pb-1 text-sm font-medium text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Have a specific requirement?
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}