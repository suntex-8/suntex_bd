"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { teamData } from "@/data/SiteSectionData";

export function Team() {
  return (
    <section id="team" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted"
          >
            <span className="h-px w-8 bg-accent" />
            {teamData.subTitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] leading-[1.08] text-foreground sm:text-4xl lg:text-[44px]"
          >
            {teamData.headline}
          </motion.h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamData.members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full ring-1 ring-line">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm text-muted">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
