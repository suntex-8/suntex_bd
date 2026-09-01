"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { processSteps } from "@/data/ServicesPageData";

export function ProcessTimeline() {
  return (
    <section className="bg-[#f6f6f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-[32px] leading-[1.15] text-foreground sm:text-4xl lg:text-[44px]"
          >
            Our Structured Manufacturing Process
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-foreground/15 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {processSteps.map((step, i) => {
              const isTop = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Content */}
                  <div className={`mb-6 lg:mb-0 ${isTop ? "lg:order-1 lg:mb-6" : "lg:order-3 lg:mt-6"}`}>
                    <h3 className="mb-2 text-base font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mx-auto max-w-[200px] text-xs leading-relaxed text-foreground/60">
                      {step.description}
                    </p>
                  </div>

                  {/* Circular image */}
                  <div className={`relative h-[140px] w-[140px] overflow-hidden rounded-full shadow-lg xl:h-[160px] xl:w-[160px] ${isTop ? "lg:order-2" : "lg:order-2"}`}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Number circle */}
                  <div
                    className={`absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-display text-sm font-bold text-white shadow-md ${
                      i === processSteps.length - 1 ? "bg-foreground" : "bg-accent text-foreground"
                    } ${isTop ? "lg:order-3 lg:translate-y-[70px]" : "lg:order-0 lg:-translate-y-[70px]"}`}
                  >
                    {step.number}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
