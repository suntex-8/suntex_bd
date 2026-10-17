"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { group, imageIn, textIn, textInSoft } from "@/lib/motion";
import { facilitiesData } from "@/data/SiteSectionData";

export function Facilities() {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id="facilities"
      className="bg-background py-12 sm:py-14 lg:py-14"
      variants={group}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header + stats on one row */}
        <div className="grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-6">
            <motion.span
              variants={textInSoft}
              className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-muted uppercase"
            >
              <span className="h-px w-8 bg-accent" />
              {facilitiesData.subTitle}
            </motion.span>

            <motion.h2
              variants={textIn}
              className="mt-4 max-w-xl font-light text-foreground"
              style={{
                fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                textWrap: "balance",
              }}
            >
              {facilitiesData.headline}
            </motion.h2>
          </div>

          <motion.ul
            variants={textInSoft}
            className="grid grid-cols-2 gap-x-6 gap-y-5 lg:col-span-6 lg:grid-cols-4 lg:gap-0"
          >
            {facilitiesData.stats.map((stat) => (
              <li
                key={stat.label}
                className="lg:border-l lg:border-line lg:px-5 lg:first:border-l-0 lg:first:pl-0"
              >
                <span
                  className="font-display block font-light text-foreground"
                  style={{
                    fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.value}
                </span>
                <span className="mt-2 block text-[10px] leading-snug tracking-[0.16em] text-muted uppercase">
                  {stat.label}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Cards: one short row */}
        <ul className="mt-8 grid grid-cols-2 gap-3 lg:mt-9 lg:grid-cols-4 lg:gap-4">
          {facilitiesData.items.map((item) => (
            <motion.li
              key={item.index}
              variants={imageIn}
              className="group relative h-[190px] overflow-hidden rounded-2xl bg-ink sm:h-[220px] lg:h-[260px]"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/30 to-transparent"
              />

              <span
                aria-hidden="true"
                className="absolute top-3 left-3 text-[10px] font-semibold tracking-[0.18em] text-white/80 tabular-nums lg:top-4 lg:left-4"
              >
                {item.index}
              </span>

              <div className="absolute inset-x-3 bottom-3 lg:inset-x-4 lg:bottom-4">
                <span className="mb-2 block h-px w-5 bg-accent transition-all duration-500 group-hover:w-10 motion-reduce:transition-none" />
                <h3
                  className="font-display text-white"
                  style={{
                    fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p className="mt-1.5 hidden line-clamp-2 text-[12px] leading-[1.5] font-light text-white/70 sm:block">
                  {item.note}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}