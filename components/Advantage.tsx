"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

const EASE: [number, number, number, number] = [
  0.23, 1, 0.32, 1,
];

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

const TYPICAL = [
  "Buyer",
  "Agent",
  "Factory",
  "Quality control",
  "Shipping",
];

const SUNTEX = [
  "Design",
  "Sampling",
  "Production",
  "Quality control",
  "Logistics",
];

function Chain({
  steps,
  integrated = false,
}: {
  steps: string[];
  integrated?: boolean;
}) {
  return (
    <motion.ol
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative mt-8"
    >
      {steps.map((step, index) => (
        <motion.li
          variants={item}
          key={step}
          className="group relative flex min-h-[58px] items-center gap-5"
        >
          {/* Connected workflow line */}
          <div className="relative flex w-4 shrink-0 items-center justify-center self-stretch">
            {index !== steps.length - 1 && (
              <span
                className={`absolute bottom-0 top-0 w-px ${
                  integrated
                    ? "bg-[#292713]/25"
                    : "bg-border"
                }`}
              />
            )}

            {/* Workflow node */}
            <span
              className={`relative z-10 h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                integrated
                  ? "border-[#292713] bg-[#292713] ring-4 ring-[#292713]/10"
                  : "border-muted-foreground/30 bg-background group-hover:border-muted-foreground"
              }`}
            />
          </div>

          <span
            className={`text-sm tracking-[-0.02em] transition-colors duration-300 ${
              integrated
                ? "text-[#292713]"
                : "text-muted-foreground"
            }`}
          >
            {step}
          </span>

          {integrated && index === steps.length - 1 && (
            <span className="ml-auto text-[10px] font-medium uppercase tracking-[0.16em] text-[#66591D]">
              Complete
            </span>
          )}
        </motion.li>
      ))}
    </motion.ol>
  );
}

export function Advantage() {
  const reduced = useReducedMotion();
  const initial = reduced ? false : "hidden";

  return (
    <section
      id="advantage"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      {/* Section heading */}
      <motion.div
        initial={initial}
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={rise}
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-accent" />

          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            The SUNTEX advantage
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end">
          <h2 className="max-w-xl text-4xl font-light leading-[1.08] tracking-[-0.055em] text-foreground sm:text-5xl md:text-6xl">
            Less complexity.
            <br />
            <span className="text-muted-foreground/60">
              More control.
            </span>
          </h2>

          <p className="max-w-sm text-sm leading-7 text-muted-foreground md:justify-self-end">
            From the first sketch to final shipment, one
            connected process keeps every stage moving
            together.
          </p>
        </div>
      </motion.div>

      {/* Comparison */}
      <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-2 md:gap-6">

        {/* Conventional process */}
        <motion.div
          initial={initial}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={rise}
          className="px-1 py-6 md:py-8"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              The usual way
            </h3>

            <span className="text-[10px] tabular-nums text-muted-foreground/60">
              05 HANDOFFS
            </span>
          </div>

          <Chain steps={TYPICAL} />

          <p className="mt-6 max-w-xs text-xs leading-6 text-muted-foreground/70">
            More parties. More coordination. More room
            for things to get lost between stages.
          </p>
        </motion.div>

        {/* SUNTEX — warm yellow feature panel */}
        <motion.div
          initial={initial}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={rise}
          className="relative overflow-hidden rounded-sm bg-[#F5E7A1] px-6 py-7 text-[#292713] sm:px-8 sm:py-9"
        >
          {/* Minimal decorative rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#292713]/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border border-[#292713]/10"
          />

          {/* Panel heading */}
          <div className="relative flex items-center justify-between gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em]">
              The SUNTEX way
            </h3>

            <span className="text-[10px] font-medium tabular-nums tracking-wide text-[#66591D]">
              01 PARTNER
            </span>
          </div>

          {/* Integrated workflow */}
          <div className="relative">
            <Chain steps={SUNTEX} integrated />
          </div>

          {/* Supporting statement */}
          <div className="relative mt-6 border-t border-[#292713]/15 pt-5">
            <p className="max-w-xs text-xs leading-6 text-[#514A2B]">
              One accountable partner connects the entire
              process, from concept to delivery.
            </p>
          </div>

          {/* Oversized editorial detail */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 right-6 text-5xl font-light tracking-tighter text-[#292713]/10"
          >
            S.
          </span>
        </motion.div>
      </div>

      {/* Closing statement and CTA */}
      <motion.div
        initial={initial}
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={rise}
        className="flex flex-col gap-8 pt-12 sm:flex-row sm:items-end sm:justify-between sm:pt-16"
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            One partner. End to end.
          </p>

          <p className="mt-4 text-2xl font-light tracking-[-0.04em] text-foreground sm:text-3xl">
            Your vision,{" "}
            <span className="text-muted-foreground/60">
              without the friction.
            </span>
          </p>
        </div>

        <a
          href="#contact"
          className="group inline-flex w-fit items-center gap-6 border-b border-foreground/30 pb-3 text-sm text-foreground transition-colors hover:border-accent"
        >
          <span>Partner with SUNTEX</span>

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            ↗
          </span>
        </a>
      </motion.div>
    </section>
  );
}

