"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
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
import { SectionHeader } from "./SectionHeader";

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
const GAP = 0;

export function Advantage() {
  const items = advantageData.items;
  const loopItems = [...items, ...items];

  return (
    <section id="advantage" className="overflow-hidden bg-[#edf2fb] py-20 lg:py-28">
      <div className="px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader data={advantageData} />
        </div>

        <div
          className="relative mt-10"
          onMouseEnter={(e) => (e.currentTarget.dataset.paused = "true")}
          onMouseLeave={(e) => (e.currentTarget.dataset.paused = "false")}
        >
          <motion.div
            className="flex w-max"
            animate={{ x: [0, -(items.length * CARD_WIDTH)] }}
            transition={{
              x: {
                duration: items.length * 8,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            {loopItems.map((item, i) => (
              <AdvantageCard key={`${item.title}-${i}`} item={item} index={i} />
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
    <article className="group flex w-[340px] shrink-0 flex-col border border-foreground/10">
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 text-[20px] font-semibold leading-snug text-foreground">
          {item.title}
        </p>
        <div className="relative mb-5 h-[200px] overflow-hidden rounded-xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <p className="mb-auto text-sm leading-relaxed text-foreground/60">
          {item.description}
        </p>
      </div>
      <div className="flex items-center justify-between border-t border-foreground/10 px-6 py-2">
        <Link
          href={item.readMore.href}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-accent"
        >
          {item.readMore.label}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-foreground/10 text-foreground transition-colors group-hover:bg-foreground group-hover:text-white">
          <Icon className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
