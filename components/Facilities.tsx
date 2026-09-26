"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { facilitiesData } from "@/data/SiteSectionData";
import { SectionHeader } from "./SectionHeader";

const spans = [
  "sm:col-span-2 lg:col-span-6 lg:row-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
  "sm:col-span-2 lg:col-span-6",
];

const heights = "h-[300px] sm:h-[340px] lg:h-[252px]";

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

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
          viewport={{ once: true, amount: 0.2 }}
        >
          {facilitiesData.items.map((item, i) => (
            <motion.figure
              key={item.title}
              variants={rise}
              className={`group relative overflow-hidden rounded-xl ${heights} ${spans[i]} ${
                i === 0 ? "lg:h-auto" : ""
              }`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5 lg:p-6">
                <span className="mb-2 h-px w-6 shrink-0 bg-accent transition-all duration-500 ease-out group-hover:w-11 motion-reduce:transition-none" />
                <h3 className="font-display text-lg leading-tight font-semibold text-white sm:text-xl">
                  {item.title}
                </h3>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
