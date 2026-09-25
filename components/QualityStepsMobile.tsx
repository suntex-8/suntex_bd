"use client";

import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import type { QcStage } from "@/data/SiteSectionData";

type QualityStepsMobileProps = {
  stages: QcStage[];
  icons: LucideIcon[];
};

export function QualityStepsMobile({
  stages,
  icons,
}: QualityStepsMobileProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ol
      className="relative mx-auto mt-14 max-w-2xl px-5 xl:hidden"
      aria-label="Five-stage quality control process"
    >
      <span
        className="absolute top-10 bottom-10 left-[41px] border-l border-dashed border-ink/20"
        aria-hidden="true"
      />

      {stages.map((stage, i) => {
        const StageIcon = icons[i];

        return (
          <li key={stage.step} className="relative mb-6 last:mb-0">
            <motion.article
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-4"
            >
              <span className="relative z-10 mt-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent text-ink shadow-sm">
                <StageIcon className="h-5 w-5" aria-hidden="true" />
              </span>

              <div className="min-w-0 flex-1 rounded-2xl border border-line bg-surface p-5">
                <span className="font-display text-3xl leading-none font-medium text-[#967400]">
                  0{stage.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
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
  );
}
