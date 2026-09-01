"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { facilitiesData } from "@/data/SiteSectionData";
import { SectionHeader } from "./SectionHeader";

export function Facilities() {
  return (
    <section id="facilities" className="bg-[#fafaff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader data={facilitiesData} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilitiesData.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
