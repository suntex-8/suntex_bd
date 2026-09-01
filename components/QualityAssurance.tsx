"use client";

import { motion } from "motion/react";
import { qualityData } from "@/data/SiteSectionData";

export function QualityAssurance() {
  return (
    <section className="bg-[#f6f6f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {qualityData.subTitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] leading-[1.15] text-foreground sm:text-4xl lg:text-[44px]"
          >
            {qualityData.headline}
          </motion.h2>
        </div>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-foreground/15 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {qualityData.stages.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-foreground shadow-md">
                  <span className="font-display text-xl font-bold">{s.step}</span>
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{s.stage}</h3>
                <p className="text-xs leading-relaxed text-foreground/60">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-sm italic text-foreground/50">{qualityData.caption}</p>
      </div>
    </section>
  );
}
