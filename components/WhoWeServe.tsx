"use client";

import { motion } from "motion/react";
import { Globe, Home } from "lucide-react";
import { whoWeServeData } from "@/data/SiteSectionData";

const iconMap: Record<string, typeof Globe> = { globe: Globe, home: Home };

export function WhoWeServe() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted"
          >
            <span className="h-px w-8 bg-accent" />
            {whoWeServeData.subTitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] leading-[1.08] text-foreground sm:text-4xl lg:text-[44px]"
          >
            {whoWeServeData.headline}
          </motion.h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {whoWeServeData.segments.map((s, i) => {
            const Icon = iconMap[s.icon] || Globe;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border-t border-line pt-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-muted">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
