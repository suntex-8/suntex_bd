"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { group, imageIn, rule, textIn } from "@/lib/motion";
import { facilitiesData } from "@/data/SiteSectionData";
import { SectionHeader } from "./SectionHeader";

/* An asymmetric 4-tile plate: one tall anchor on the left, two stacked
   beside it, one wide band underneath. Spans are declared explicitly per
   tile rather than pulled from an index so adding or reordering an item
   can't silently break the layout. */
const SPANS = [
  "lg:col-span-6 lg:row-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-6",
];

const HEIGHTS = "h-[340px] sm:h-[380px] lg:h-[280px] lg:first:h-auto";

export function Facilities() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="facilities" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader data={facilitiesData} />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2"
          variants={group}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {facilitiesData.items.map((item, i) => (
            <motion.figure
              key={item.index}
              variants={imageIn}
              className={`group relative overflow-hidden rounded-xl ${HEIGHTS} ${SPANS[i]}`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none"
              />

              {/* Scrim is bottom-weighted so the caption always has a
                  floor to sit on, at any image crop. */}
              <div className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/55 to-ink/10" />

              <figcaption className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                <span className="flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.18em] text-accent uppercase tabular-nums">
                  <span className="h-px w-5 bg-accent transition-all duration-500 ease-out group-hover:w-9 motion-reduce:transition-none" />
                  {item.index}
                </span>

                <h3
                  className="mt-2.5 text-white"
                  style={{ fontSize: "1.15rem", lineHeight: 1.25 }}
                >
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[46ch] text-[13px] leading-relaxed text-white/70">
                  {item.note}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* Ledger strip — the numbers are already claimed elsewhere on the
            site, so this reads as a summary rather than new claims. */}
        <motion.div
          variants={rule}
          className="mt-10 block h-px w-full origin-left bg-line"
        />

        <motion.ul
          variants={group}
          className="grid grid-cols-2 gap-x-8 gap-y-7 pt-8 lg:grid-cols-4"
        >
          {facilitiesData.stats.map((stat) => (
            <motion.li key={stat.label} variants={textIn}>
              <span
                className="font-display block text-3xl font-semibold text-foreground lg:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                {stat.value}
              </span>
              <span className="mt-1.5 block text-[11px] tracking-[0.14em] text-muted uppercase">
                {stat.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
