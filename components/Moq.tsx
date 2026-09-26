"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { moqData } from "@/data/SiteSectionData";
import { TwistingRibbon } from "@/components/TwistingRibbon";

const ribbonColors = {
  face: "#f7c527",
  foldA: "#fbe87e",
  foldB: "#fff3bf",
  foldC: "#e9a112",
};

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
};

export function Moq() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-background pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] overflow-hidden"
      >
        <div className="absolute inset-x-[-4%] top-[-70px] h-[540px] opacity-90 mix-blend-multiply">
          <TwistingRibbon
            segments={260}
            waveSpeed={0.012}
            waveAmplitude={0.75}
            twistCycles={5}
            lightColors={ribbonColors}
            darkColors={ribbonColors}
            className="rounded-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/70 to-background" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8"
        variants={group}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.span
          variants={rise}
          className="mb-5 inline-flex items-center gap-3 text-sm font-semibold text-muted"
        >
          <span className="h-px w-8 bg-accent" />
          {moqData.subTitle}
        </motion.span>

        <motion.h2
          variants={rise}
          className="max-w-3xl text-[32px] leading-[1.08] text-foreground sm:text-4xl lg:text-[44px]"
        >
          {moqData.headline}
        </motion.h2>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-14">
          <motion.p
            variants={rise}
            className="max-w-2xl text-[17px] leading-relaxed text-muted md:col-span-7"
          >
            {moqData.standard.philosophy}
          </motion.p>

          <motion.div
            variants={rise}
            className="md:col-span-5 md:border-l md:border-line md:pl-10"
          >
            <span className="font-display block text-6xl leading-none font-semibold text-foreground lg:text-7xl">
              {moqData.standard.value}
            </span>
            <span className="mt-3 block max-w-[20ch] text-sm leading-snug text-muted">
              {moqData.standard.scope}
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={rise}
          className="mt-14 border-t border-accent pt-8 md:flex md:items-start md:justify-between md:gap-14"
        >
          <div className="md:w-2/5">
            <p className="text-xs font-semibold text-accent">
              {moqData.specialTrack.availability}
            </p>
            <h3 className="font-display mt-2 text-xl font-semibold text-foreground">
              {moqData.specialTrack.target}
            </h3>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:mt-0 md:flex-1">
            {moqData.specialTrack.useCase}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
