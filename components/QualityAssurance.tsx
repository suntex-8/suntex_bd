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
import { QualityStepsMobile } from "./QualityStepsMobile";

const stageIcons: LucideIcon[] = [
  Layers3,
  Scissors,
  Spool,
  CheckCheck,
  PackageCheck,
];

export function QualityAssurance() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.span
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-5 flex w-fit items-center gap-3 text-sm font-semibold text-muted"
        >
          <span className="h-px w-8 bg-accent" />
          {qualityData.subTitle}
        </motion.span>

        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center text-[36px] leading-[1.04] font-semibold text-foreground sm:text-5xl lg:text-[56px]"
        >
          {qualityData.headline}
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-muted sm:text-base"
        >
          Every checkpoint is handled by our own QC team, from incoming
          materials to final dispatch.
        </motion.p>
      </div>

      <QualityStepsMobile stages={qualityData.stages} icons={stageIcons} />

      <div className="mx-auto mt-14 hidden w-full max-w-[1600px] px-5 lg:px-8 xl:block">
        <div className="relative h-[440px] w-full">
          <svg
            className="absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 1600 440"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <motion.path
              d="M160 34 L480 124 L800 34 L1120 124 L1440 34"
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
                  className={`relative h-[330px] ${
                    isOffset
                      ? "translate-y-[90px] rotate-[1deg]"
                      : "rotate-[-1deg]"
                  }`}
                >
                  <motion.article
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex h-full flex-col rounded-[26px] border border-line bg-surface p-3 shadow-[0_18px_45px_rgba(14,16,19,0.08)]"
                  >
                    <div className="flex justify-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-accent text-ink">
                        <StageIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>

                    <div className="mt-4 flex flex-1 flex-col rounded-2xl border border-accent/20 bg-accent/10 px-5 py-6">
                      <span className="font-display text-4xl leading-none font-medium text-[#967400]">
                        0{stage.step}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold text-foreground">
                        {stage.stage}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
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
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-8 max-w-3xl px-5 text-center text-sm leading-relaxed text-muted"
      >
        {qualityData.caption}
      </motion.p>
    </section>
  );
}
