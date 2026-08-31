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
const GAP = 24;

export function Advantage() {
  const items = advantageData.items;
  // Duplicate the list twice for a seamless infinite loop
  const loopItems = [...items, ...items];

  return (
    <section id="advantage" className="overflow-hidden bg-[#f6f6f3] py-20 lg:py-28">
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
            className="flex w-max gap-6"
            animate={{ x: [0, -(items.length * (CARD_WIDTH + GAP))] }}
            transition={{
              x: {
                duration: items.length * 4,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            {loopItems.map((item, i) => (
              <AdvantageCard key={`${item.title}-${i}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AdvantageCard({
  item,
}: {
  item: (typeof advantageData.items)[number];
}) {
  const Icon = iconMap[item.icon] ?? Sparkles;
  return (
    <article className="group w-[340px] shrink-0 overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/40" />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl leading-snug">{item.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-foreground/60">
          {item.description}
        </p>
        <div className="flex items-center justify-between border-t border-black/5 pt-4">
          <Link
            href={item.readMore.href}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-foreground transition-colors hover:text-accent"
          >
            {item.readMore.label}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground transition-colors group-hover:bg-[#0b2239] group-hover:text-white">
            <Icon className="h-5 w-5" />
          </span>
        </div>
      </div>
    </article>
  );
}
