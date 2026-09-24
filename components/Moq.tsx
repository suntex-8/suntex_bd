"use client";

import { motion } from "motion/react";
import { Package, Sparkles } from "lucide-react";
import { moqData } from "@/data/SiteSectionData";

export function Moq() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted"
          >
            <span className="h-px w-8 bg-accent" />
            {moqData.subTitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] leading-[1.08] text-foreground sm:text-4xl lg:text-[44px]"
          >
            {moqData.headline}
          </motion.h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t border-line pt-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
              <Package className="h-5 w-5" />
            </div>
            <h3 className="font-display mb-3 text-4xl font-semibold text-foreground">{moqData.standard.value}</h3>
            <p className="mb-3 text-sm font-medium text-muted">{moqData.standard.scope}</p>
            <p className="text-sm leading-relaxed text-muted">{moqData.standard.philosophy}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border-t-2 border-accent pt-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{moqData.specialTrack.target}</h3>
            <p className="mb-2 text-xs font-semibold tracking-wide text-accent">{moqData.specialTrack.availability}</p>
            <p className="text-sm leading-relaxed text-muted">{moqData.specialTrack.useCase}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
