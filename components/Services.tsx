"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Boxes, Layers, Shirt, Sparkles, type LucideIcon } from "lucide-react";
import { servicesData, type Service } from "@/data/SiteSectionData";
import { SectionHeader } from "./SectionHeader";
import { cardVariants } from "./anim";

const iconMap: Record<Service["icon"], LucideIcon> = {
  woven: Layers,
  knit: Boxes,
  garment: Shirt,
  fiber: Sparkles,
};

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader data={servicesData} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.items.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-xl bg-[#f6f6f3] transition-colors"
              >
                {/* Image reveal — wipes top-left to bottom-right on hover */}
                {service.hoverImage && (
                  <div className="pointer-events-none absolute inset-0 reveal-tl-br">
                    <Image
                      src={service.hoverImage}
                      alt=""
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/70" />
                  </div>
                )}
                {/* Icon — top-right, yellow rounded bg, changes on hover reveal */}
                <span className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-foreground shadow-sm transition-colors group-hover:bg-[#0b2239] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="relative z-10 mt-auto p-8 transition-colors group-hover:text-white">
                  <h3 className="mb-3 text-2xl">
                    <Link
                      href={service.href}
                      className="hover:text-accent"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/70 transition-colors group-hover:text-white/80">
                    {service.description}
                  </p>
                  {service.readMore && (
                    <Link
                      href={service.readMore.href}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-foreground/70 transition-colors group-hover:text-accent"
                    >
                      read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-foreground/70">{servicesData.bottomText}</p>
          <Link
            href={servicesData.seeAll.href}
            className="btn-brand rounded-full px-8 py-4 text-sm font-bold"
          >
            <span className="relative z-10 inline-flex items-center gap-2">{servicesData.seeAll.label}<ArrowRight className="h-4 w-4" /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
