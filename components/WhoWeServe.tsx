"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Globe, Home } from "lucide-react";
import { whoWeServeData } from "@/data/SiteSectionData";

const iconMap: Record<string, typeof Globe> = { globe: Globe, home: Home };

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

export function WhoWeServe() {
  const prefersReducedMotion = useReducedMotion();
  const GlobeIcon = iconMap[whoWeServeData.segments[0].icon] ?? Globe;
  const HomeIcon = iconMap[whoWeServeData.segments[1].icon] ?? Home;

  return (
    <motion.section
      className="bg-background"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="bg-ink">
        <div className="px-5 pt-16 pb-5 lg:px-10 lg:pt-24 lg:pb-7">
          <motion.span
            variants={rise}
            className="inline-flex items-center gap-3 text-sm font-semibold text-white/55"
          >
            <span className="h-px w-8 bg-accent" />
            {whoWeServeData.subTitle}
          </motion.span>
          <motion.h2
            variants={rise}
            className="mt-5 max-w-4xl text-[32px] leading-[1.05] font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[52px]"
          >
            {whoWeServeData.headline}
          </motion.h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <motion.div
          variants={rise}
          className="border-t border-white/15 bg-ink px-5 pt-14 pb-16 lg:px-10 lg:pt-16 lg:pb-24"
        >
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
              <GlobeIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-white lg:text-2xl">
                {whoWeServeData.segments[0].title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">
                {whoWeServeData.segments[0].description}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={rise}
          className="border-t-2 border-accent bg-surface px-5 pt-14 pb-16 lg:border-t-0 lg:border-l-2 lg:px-10 lg:pt-16 lg:pb-24"
        >
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-background text-foreground">
              <HomeIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground lg:text-2xl">
                {whoWeServeData.segments[1].title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {whoWeServeData.segments[1].description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
