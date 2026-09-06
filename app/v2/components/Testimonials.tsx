"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const items = testimonialsData.items;

  return (
    <section
      id="testimonials"
      className="bg-[#1b2130] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border-b border-[#f2f0e7]/15 pb-10 md:flex-row md:items-end">
            <div>
              <SectionLabel light>Buyer perspective</SectionLabel>
              <h2 className="mt-8 max-w-[760px] text-[clamp(2.8rem,5vw,5.3rem)] font-semibold leading-[.9] tracking-[-.065em] text-[#f2f0e7]">
                Good work travels
                <br />
                <span className="text-[#9da1a7]">by word of mouth.</span>
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setCurrent((c) => (c + items.length - 1) % items.length)
                }
                className="flex h-11 w-11 items-center justify-center border border-[#f2f0e7]/20 text-[#f2f0e7] transition-colors hover:bg-[#fff000] hover:text-[#1b2130]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setCurrent((c) => (c + 1) % items.length)}
                className="flex h-11 w-11 items-center justify-center border border-[#f2f0e7]/20 text-[#f2f0e7] transition-colors hover:bg-[#fff000] hover:text-[#1b2130]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="grid gap-10 py-14 md:grid-cols-[90px_1fr_240px] md:gap-14"
          >
            <Quote size={42} className="text-[#fff000]" fill="currentColor" />
            <blockquote className="max-w-[780px] text-[clamp(1.7rem,3vw,3.2rem)] font-semibold leading-[1.05] tracking-[-.055em] text-[#f2f0e7]">
              &ldquo;{items[current].quote}&rdquo;
            </blockquote>
            <div className="self-end border-t border-[#f2f0e7]/15 pt-4">
              <div className="font-semibold text-[#f2f0e7]">
                {items[current].name}
              </div>
              <div className="mt-1 text-xs text-[#9da1a7]">
                {items[current].role}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
