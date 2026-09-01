"use client";

import { motion } from "motion/react";
import { Clock, Rocket } from "lucide-react";
import { leadTimeData } from "@/data/SiteSectionData";

export function LeadTime() {
  return (
    <section className="bg-[#fafaff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {leadTimeData.subTitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] leading-[1.15] text-foreground sm:text-4xl lg:text-[44px]"
          >
            {leadTimeData.headline}
          </motion.h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {leadTimeData.tiers.map((t, i) => (
            <motion.div
              key={t.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-5 rounded-xl border border-foreground/10 bg-[#f6f6f3] p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-foreground">
                {i === 0 ? <Rocket className="h-6 w-6" /> : <Clock className="h-6 w-6" />}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{t.tier}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{t.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
