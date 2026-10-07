"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { group, imageIn, textIn } from "@/lib/motion";
import { facilitiesData } from "@/data/SiteSectionData";
import { SectionHeader } from "./SectionHeader";

/* Bento layout (lg, 12 cols). Placement is auto-flow in DOM order:

   ┌───────────────┬───────┬───────┐
   │               │   B   │   C   │
   │       A       ├───┬───┼───┬───┤
   │               │ s1│ s2│ s3│ s4│  (2x2 stat cards)
   ├───────────────┴───┴───┴───┴───┤
   │               D               │
   └───────────────────────────────┘

   Spans are declared per tile (not computed from an index) so reordering
   or adding an item can't silently break the layout. */
const ITEM_SPANS = [
  "col-span-2 aspect-[4/3] sm:aspect-[16/10] lg:col-span-6 lg:row-span-4 lg:aspect-auto",
  "col-span-2 aspect-[4/3] sm:col-span-1 sm:aspect-[3/4] lg:col-span-3 lg:row-span-2 lg:aspect-auto",
  "col-span-2 aspect-[4/3] sm:col-span-1 sm:aspect-[3/4] lg:col-span-3 lg:row-span-2 lg:aspect-auto",
  "col-span-2 aspect-[4/3] sm:aspect-[21/9] lg:col-span-12 lg:row-span-2 lg:aspect-auto",
];

/* First stat is the loud one; the rest stay quiet on ink. */
const STAT_THEMES = [
  {
    card: "bg-accent text-ink",
    label: "text-ink/70",
    ring: "border-ink/20",
  },
  {
    card: "bg-ink text-white",
    label: "text-white/55",
    ring: "border-white/10",
  },
  {
    card: "bg-ink text-white",
    label: "text-white/55",
    ring: "border-white/10",
  },
  {
    card: "bg-ink text-white",
    label: "text-white/55",
    ring: "border-white/10",
  },
];

export function Facilities() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="facilities" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader data={facilitiesData} />

        <motion.div
          className="grid grid-cols-2 gap-3 lg:grid-cols-12 lg:auto-rows-[128px] lg:gap-4"
          variants={group}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Image tiles A, B, C */}
          {facilitiesData.items.slice(0, 3).map((item, i) => (
            <ImageTile key={item.index} item={item} className={ITEM_SPANS[i]} />
          ))}

          {/* Stat cards: 1 col on mobile (2x2), 3 cols x 1 row on lg */}
          {facilitiesData.stats.map((stat, i) => {
            const theme = STAT_THEMES[i] ?? STAT_THEMES[1];

            return (
              <motion.div
                key={stat.label}
                variants={textIn}
                className={`group relative flex min-h-[140px] flex-col justify-between overflow-hidden rounded-2xl p-5 lg:col-span-3 lg:min-h-0 lg:p-6 ${theme.card}`}
              >
                {/* Decorative concentric rings, bottom-right */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 rounded-full border transition-transform duration-700 ease-out group-hover:scale-125 motion-reduce:transition-none ${theme.ring}`}
                />
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-14 -bottom-14 h-44 w-44 rounded-full border transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none ${theme.ring}`}
                />

                <span
                  className={`relative text-[10px] font-semibold tracking-[0.16em] uppercase sm:text-[11px] ${theme.label}`}
                >
                  {stat.label}
                </span>

                <span
                  className="font-display relative block text-4xl leading-none font-semibold lg:text-5xl"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {stat.value}
                </span>
              </motion.div>
            );
          })}

          {/* Wide band D */}
          {facilitiesData.items.slice(3, 4).map((item) => (
            <ImageTile
              key={item.index}
              item={item}
              className={ITEM_SPANS[3]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type FacilityItem = (typeof facilitiesData.items)[number];

function ImageTile({
  item,
  className,
}: {
  item: FacilityItem;
  className: string;
}) {
  return (
    <motion.figure
      variants={imageIn}
      className={`group relative overflow-hidden rounded-2xl bg-ink ${className}`}
    >
      <Image
        src={item.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none"
      />

      {/* Bottom-weighted scrim so the caption always has a floor */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/30 to-transparent"
      />

      {/* Index chip */}
      <span
        aria-hidden="true"
        className="absolute top-3 left-3 rounded-full border border-white/20 bg-ink/40 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-white tabular-nums backdrop-blur-sm lg:top-4 lg:left-4"
      >
        {item.index}
      </span>

      <figcaption className="absolute inset-x-0 bottom-0 p-4 lg:p-6">
        <span className="mb-3 block h-px w-6 bg-accent transition-all duration-500 ease-out group-hover:w-12 motion-reduce:transition-none" />
        <h3
          className="font-display text-white"
          style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.4rem)", lineHeight: 1.2 }}
        >
          {item.title}
        </h3>
        <p className="mt-1.5 max-w-[46ch] text-[12.5px] leading-relaxed text-white/75 lg:text-[13px]">
          {item.note}
        </p>
      </figcaption>
    </motion.figure>
  );
}