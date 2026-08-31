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
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className={`mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent ${
          data.centered ? "mx-auto" : ""
        }`}
      >
        {data.subTitle}
      </motion.p>
      <h2 className="text-[32px] leading-[1.15] sm:text-4xl lg:text-[40px]">
        <RevealText text={data.headline} />
      </h2>
    </div>
  );
}
