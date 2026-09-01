"use client";

import { motion } from "motion/react";
import { ArrowRight, Factory, Globe, Handshake, RefreshCcw, Truck, HeadphonesIcon } from "lucide-react";
import { processData, type ProcessStep } from "@/data/SiteSectionData";
import { SectionHeader } from "./SectionHeader";
import { cardVariants } from "./anim";

const stepIcons = [Factory, Globe, RefreshCcw, Handshake, Truck, HeadphonesIcon];

export function Process() {
  return (
    <section id="process" className="bg-[#f6f6f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader data={processData} />
        <div className="relative grid gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:gap-x-8">
          {processData.steps.map((step, i) => (
            <ProcessCard key={step.order} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const isLast = index === processData.steps.length - 1;
  const Icon = stepIcons[index];
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      className="group relative text-center"
    >
      {/* Dashed arrow connector pointing to next step */}
      {!isLast && (
        <div className="pointer-events-none absolute -right-4 top-14 hidden items-center lg:flex">
          <span className="flex items-center gap-0.5 text-accent" aria-hidden>
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="h-0.5 w-4 border-t-2 border-dashed border-accent"
              />
            ))}
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      )}

      {/* Number circle with overlapping icon */}
      <div className="relative mx-auto h-[120px] w-[120px]">
        {/* Icon overlapping top-right of circle */}
        <span className="absolute -top-3 right-[-6px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground shadow-lg transition-colors duration-400 group-hover:bg-yellow">
          <Icon className="h-5 w-5" />
        </span>
        {/* Number circle */}
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-[34px] font-medium text-foreground shadow-sm ring-1 ring-black/5 transition-all duration-400 group-hover:bg-foreground group-hover:text-white group-hover:shadow-xl">
          {step.order}
        </div>
      </div>

      {/* Content */}
      <div className="mt-8">
        <h3 className="mb-3 text-2xl">{step.title}</h3>
        <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/70">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
