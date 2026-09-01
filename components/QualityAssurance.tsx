"use client";

import { motion } from "motion/react";
import { qualityData } from "@/data/SiteSectionData";

export function QualityAssurance() {
  return (
    <section className="bg-[#fafaff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — quality steps */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-block rounded-full border border-foreground/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground"
            >
              Quality Checks
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-[36px] leading-tight font-normal text-foreground sm:text-5xl lg:text-[56px]"
            >
              Quality Checked at Every Stage
            </motion.h2>

            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-px bg-foreground/10" />

              <div className="space-y-8">
                {qualityData.stages.map((stage, i) => (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative flex gap-5"
                  >
                    {/* Dot */}
                    <div className="relative z-10 mt-1.5 flex h-[15px] w-[15px] shrink-0 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38bdf8] opacity-30" />
                      <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-[#38bdf8]" />
                    </div>

                    <div>
                      <span className="mb-1 block text-sm font-medium text-foreground/40">
                        0{stage.step}
                      </span>
                      <h3 className="text-lg font-normal text-foreground sm:text-xl">
                        {stage.stage}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/50">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — cloth illustration + caption */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="flex h-[400px] items-center justify-center">
                <img
                  src="/clothsvg.png"
                  alt="Fabric illustration"
                  className="h-auto max-h-[380px] w-auto object-contain"
                />
              </div>

              <p className="mt-8 text-center text-sm italic text-foreground/40">
                {qualityData.caption}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
