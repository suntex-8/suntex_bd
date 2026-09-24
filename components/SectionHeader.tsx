"use client";

import { motion } from "motion/react";
import type { TitleBlock } from "@/data/SiteSectionData";
import { RevealText } from "./RevealText";

export function SectionHeader({ data }: { data: TitleBlock }) {
  return (
    <div
      className={`mb-12 max-w-3xl ${
        data.centered ? "mx-auto text-center" : "text-left"
      }`}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className={`mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted ${
          data.centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-accent" />
        {data.subTitle}
      </motion.span>
      <p className="text-[32px] leading-[1.08] sm:text-4xl lg:text-5xl font-semibold text-foreground">
        <RevealText text={data.headline} />
      </p>
    </div>
  );
}