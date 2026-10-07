"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  CheckCheck,
  Layers3,
  PackageCheck,
  Scissors,
  Spool,
  type LucideIcon,
} from "lucide-react";
import { qualityData } from "@/data/SiteSectionData";
import { HEADER_DELAY } from "@/lib/motion";
import { QualityStepsMobile } from "./QualityStepsMobile";
import { FeralGradient } from "./FeralGradient";

const stageIcons: LucideIcon[] = [
  Layers3,
  Scissors,
  Spool,
  CheckCheck,
  PackageCheck,
];

const stageIconColors = [
  "border-sky-600/25 bg-sky-500 text-white",
  "border-emerald-600/25 bg-emerald-500 text-white",
  "border-orange-600/25 bg-orange-500 text-white",
  "border-violet-600/25 bg-violet-500 text-white",
  "border-rose-600/25 bg-rose-500 text-white",
];

export function QualityAssurance() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-background py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <FeralGradient
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            aspectRatio: "auto",
          }}
        />
        <div className="absolute inset-0 bg-background/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.span
          initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: HEADER_DELAY }}
          className="mx-auto mb-5 flex w-fit items-center gap-3 text-sm font-semibold text-muted"
        >
          <span className="h-px w-8 bg-accent" />
          {qualityData.subTitle}
        </motion.span>

        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: HEADER_DELAY }}
          className="mx-auto max-w-4xl text-center text-[36px] leading-[1.04] font-semibold text-foreground sm:text-5xl lg:text-[56px]"
        >
          {qualityData.headline}
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: HEADER_DELAY + 0.08 }}
          className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-muted sm:text-base"
        >
          Every checkpoint is handled by our own QC team, from incoming
          materials to final dispatch.
        </motion.p>
      </div>

      <div className="relative z-10">
        <QualityStepsMobile
          stages={qualityData.stages}
          icons={stageIcons}
          iconColors={stageIconColors}
        />
      </div>

      <div className="relative z-10 mx-auto mt-14 hidden w-full max-w-[1440px] px-5 lg:px-8 xl:block">
        <div className="relative h-[300px] w-full">
          <svg
            className="absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 1600 340"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <motion.path
              d="M160 28 L480 98 L800 28 L1120 98 L1440 28"
              fill="none"
              stroke="rgba(20, 22, 26, 0.22)"
              strokeWidth={1.5}
              strokeDasharray="7 9"
              vectorEffect="non-scaling-stroke"
              initial={
                prefersReducedMotion
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1.1,
                delay: prefersReducedMotion ? 0 : HEADER_DELAY,
                ease: "easeInOut",
              }}
            />
          </svg>

          <ol className="absolute inset-0 z-10 grid grid-cols-5 gap-4">
            {qualityData.stages.map((stage, i) => {
              const StageIcon = stageIcons[i];
              const isOffset = i % 2 === 1;

              return (
                <li
                  key={stage.step}
                  className={`relative h-[210px] ${
                    isOffset
                      ? "translate-y-[56px] rotate-[1deg]"
                      : "rotate-[-1deg]"
                  }`}
                >
                  <motion.article
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: HEADER_DELAY + i * 0.08 }}
                    className="flex h-full flex-col rounded-[18px] border border-line bg-surface p-2 shadow-[0_14px_36px_rgba(14,16,19,0.07)]"
                  >
                    <div className="flex justify-center">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border shadow-sm ${stageIconColors[i]}`}
                      >
                        <StageIcon className="h-[15px] w-[15px]" aria-hidden="true" />
                      </span>
                    </div>

                    <div className="mt-2.5 flex flex-1 flex-col rounded-lg border border-accent/20 bg-accent/10 px-3.5 py-3">
                      <span className="font-display text-2xl leading-none font-medium text-[#967400]">
                        0{stage.step}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">
                        {stage.stage}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {stage.description}
                      </p>
                    </div>
                  </motion.article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: HEADER_DELAY + 0.2 }}
        className="relative z-10 mx-auto mt-8 max-w-3xl px-5 text-center text-sm leading-relaxed text-muted"
      >
        {qualityData.caption}
      </motion.p>
    </section>
  );
}
