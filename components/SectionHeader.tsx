"use client";

import { motion } from "motion/react";
import type { TitleBlock } from "@/data/SiteSectionData";
import { RevealText } from "./RevealText";

export function SectionHeader({ data }: { data: TitleBlock }) {
  return (
    <div
      className={`mb-14 max-w-3xl ${
        data.centered ? "mx-auto text-center" : "text-left"
      }`}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className={`mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-[11px] font-bold uppercase  text-foreground ${
          data.centered ? "mx-auto" : ""
        }`}
      >
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        {data.subTitle}
      </motion.span>
      <p className="text-[32px] leading-[1.15] sm:text-4xl lg:text-[40px] font-semibold text-foreground">
        <RevealText text={data.headline} />
      </p>
    </div>
  );
}
