"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Award,
  Cog,
  Headset,
  Leaf,
  Shield,
  Sparkles,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { advantageData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  shield: Shield,
  leaf: Leaf,
  sparkles: Sparkles,
  truck: Truck,
  award: Award,
  cog: Cog,
  headset: Headset,
};

const CARD_WIDTH = 340;

export function AdvantageCarousel() {
  const items = advantageData.items;
  const loopItems = [...items, ...items];
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  return (
    <section className="overflow-hidden bg-[#1b2130] px-5 py-20 text-[#f2f0e7] sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SectionLabel light>{advantageData.subTitle}</SectionLabel>
              <h2 className="mt-8 max-w-[720px] text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[.92] tracking-[-.065em]">
                Why brands choose
                <br />
                <span className="text-[#9da1a7]">SUNTEX.</span>
              </h2>
            </div>
            <p className="max-w-[300px] text-sm leading-6 text-[#b7b9bd]">
              8 reasons global buyers trust us from concept to container.
            </p>
          </div>
        </Reveal>

        <div
          ref={containerRef}
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex w-max gap-0"
            animate={{ x: [0, -(items.length * CARD_WIDTH)] }}
            transition={{
              x: {
                duration: items.length * 8,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                ...(paused ? { pauseAnimation: true } : {}),
              },
            }}
          >
            {loopItems.map((item, i) => (
              <AdvantageCard
                key={`${item.title}-${i}`}
                item={item}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AdvantageCard({
  item,
  index,
}: {
  item: (typeof advantageData.items)[number];
  index: number;
}) {
  const Icon = iconMap[item.icon] ?? Sparkles;

  return (
    <article className="group flex w-[340px] shrink-0 flex-col border border-[#f2f0e7]/10">
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 text-[20px] font-semibold leading-snug text-[#f2f0e7]">
          {item.title}
        </p>
        <div className="relative mb-5 h-[160px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover grayscale-[.2] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>
        <p className="mb-auto text-sm leading-relaxed text-[#b7b9bd]">
          {item.description}
        </p>
      </div>
      <div className="flex items-center justify-between border-t border-[#f2f0e7]/10 px-6 py-3">
        <span className="eyebrow text-[#8f949d] transition-colors group-hover:text-[#fff000]">
          {item.readMore.label}
        </span>
        <span className="flex h-10 w-10 items-center justify-center border border-[#f2f0e7]/15 text-[#8f949d] transition-colors group-hover:border-[#fff000] group-hover:bg-[#fff000] group-hover:text-[#1b2130]">
          <Icon className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
