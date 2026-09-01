"use client";

import { motion } from "motion/react";
import { Package, Sparkles } from "lucide-react";
import { moqData } from "@/data/SiteSectionData";

export function Moq() {
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
            {moqData.subTitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] leading-[1.15] text-foreground sm:text-4xl lg:text-[44px]"
          >
            {moqData.headline}
          </motion.h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-foreground/10 bg-[#f6f6f3] p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
              <Package className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-3xl font-bold text-foreground">{moqData.standard.value}</h3>
            <p className="mb-3 text-sm font-semibold text-foreground/70">{moqData.standard.scope}</p>
            <p className="text-sm leading-relaxed text-foreground/60">{moqData.standard.philosophy}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-xl border border-accent/30 bg-accent/10 p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">{moqData.specialTrack.target}</h3>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">{moqData.specialTrack.availability}</p>
            <p className="text-sm leading-relaxed text-foreground/60">{moqData.specialTrack.useCase}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
