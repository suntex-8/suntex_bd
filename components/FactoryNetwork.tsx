"use client";

import { motion } from "motion/react";
import { MapPin, CheckCircle } from "lucide-react";
import { factoryNetworkData } from "@/data/SiteSectionData";

export function FactoryNetwork() {
  return (
    <section className="dark-gradient-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {factoryNetworkData.subTitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] leading-[1.15] text-white sm:text-4xl lg:text-[44px]"
          >
            {factoryNetworkData.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60"
          >
            {factoryNetworkData.paragraph}
          </motion.p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {factoryNetworkData.locations.map((loc, i) => (
            <motion.div
              key={loc}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <MapPin className="h-5 w-5 shrink-0 text-accent" />
              <span className="font-semibold text-white">{loc}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {factoryNetworkData.advantages.map((a) => (
            <div key={a} className="flex items-center gap-2 text-sm text-white/70">
              <CheckCircle className="h-4 w-4 text-accent" />
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
