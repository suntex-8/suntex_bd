"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { faqItems } from "@/data/ServicesPageData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Faq() {
  const [open, setOpen] = useState(0);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="faq"
      className="bg-[#1b2130] px-5 py-24 text-[#f2f0e7] sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
        <Reveal>
          <SectionLabel light>Frequently asked</SectionLabel>
          <h2 className="mt-10 max-w-[450px] text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[.9] tracking-[-.07em]">
            The useful
            <br />
            <span className="text-[#8f949d]">shortlist.</span>
          </h2>
          <p className="mt-8 max-w-[330px] text-sm leading-6 text-[#b7b9bd]">
            Still deciding? Tell us what you are making. We will tell you what
            is possible.
          </p>
          <button
            onClick={() => goTo("contact")}
            className="group mt-8 inline-flex items-center gap-3 border-b border-[#fff000] pb-2 text-xs font-bold uppercase tracking-[.14em] text-[#fff000]"
          >
            Ask us directly{" "}
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border-t border-[#f2f0e7]/20">
            {faqItems.map((item, index) => (
              <div key={item.question} className="border-b border-[#f2f0e7]/20">
                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-medium tracking-[-.02em]"
                >
                  <span>{item.question}</span>
                  {open === index ? (
                    <Minus size={18} className="shrink-0 text-[#fff000]" />
                  ) : (
                    <Plus size={18} className="shrink-0 text-[#fff000]" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {open === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[680px] pb-7 pr-8 text-sm leading-6 text-[#afb2b7]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
