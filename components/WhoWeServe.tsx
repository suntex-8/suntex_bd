"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Globe, Home, type LucideIcon } from "lucide-react";
import { group, imageIn, rule, textIn, textInSoft } from "@/lib/motion";
import { whoWeServeData } from "@/data/SiteSectionData";

const iconMap: Record<string, LucideIcon> = { globe: Globe, home: Home };

/* Attribute column stays narrow; the two segment columns carry the prose. */
const COLS =
  "grid grid-cols-1 gap-x-10 sm:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)_minmax(0,1fr)]";

export function WhoWeServe() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="who-we-serve"
      className="relative isolate overflow-hidden bg-background py-20 lg:py-28"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(72%_100%_at_12%_0%,rgba(247,197,39,0.16),transparent_68%)]" />
        <div className="absolute inset-x-0 top-0 h-[320px] bg-linear-to-b from-surface/85 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col lg:col-span-4">
            <motion.span
              variants={textInSoft}
              className="inline-flex items-center gap-3 text-sm font-semibold text-muted"
            >
              <span className="h-px w-8 bg-accent" />
              {whoWeServeData.subTitle}
            </motion.span>

            <motion.h2
              variants={textIn}
              className="mt-5 text-[32px] text-foreground sm:text-4xl lg:text-[44px]"
            >
              {whoWeServeData.headline}
            </motion.h2>

            <motion.p
              variants={textInSoft}
              className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted"
            >
              {whoWeServeData.intro}
            </motion.p>

            {/* Anchored to the foot of the rail so it closes the gap the
                taller ledger on the right leaves behind. */}
            <motion.figure variants={imageIn} className="mt-10 lg:mt-auto lg:pt-12">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                <Image
                  src="/suntex-bg-1.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 60vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />
              </div>
            </motion.figure>
          </div>

          <div className="lg:col-span-8">
            <motion.div variants={textInSoft} className={COLS}>
              <span aria-hidden="true" className="hidden sm:block" />
              {whoWeServeData.segments.map((segment) => {
                const Icon = iconMap[segment.icon] ?? Globe;

                return (
                  <div key={segment.title}>
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-ink">
                      <Icon className="h-[22px] w-[22px]" strokeWidth={2} />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">
                      {segment.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                      {segment.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            <motion.span
              variants={rule}
              className="mt-9 block h-px w-full origin-left bg-accent"
            />

            {whoWeServeData.matrix.map((row) => (
              <motion.div
                key={row.attribute}
                variants={textIn}
                className={`${COLS} border-b border-line py-5`}
              >
                <h4 className="text-sm font-semibold text-foreground">
                  {row.attribute}
                </h4>

                <p className="text-sm leading-relaxed text-muted">
                  <span className="mb-1 block text-sm font-semibold text-foreground sm:hidden">
                    {whoWeServeData.segments[0].title}
                  </span>
                  {row.international}
                </p>

                <p className="text-sm leading-relaxed text-muted">
                  <span className="mb-1 block text-sm font-semibold text-foreground sm:hidden">
                    {whoWeServeData.segments[1].title}
                  </span>
                  {row.local}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}