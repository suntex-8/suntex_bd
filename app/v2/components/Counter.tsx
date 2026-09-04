"use client";

import { counterData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Counter() {
  return (
    <section className="bg-[#f2f0e7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col justify-between gap-9 md:flex-row md:items-end">
            <div>
              <SectionLabel>{counterData.subTitle}</SectionLabel>
              <h2 className="mt-9 max-w-[700px] text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[.9] tracking-[-.065em] text-[#1b2130]">
                SUNTEX at a glance.
              </h2>
              <p className="mt-6 max-w-[500px] text-base leading-7 text-[#555b67]">
                {counterData.paragraph}
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-6 border-t border-[#1b2130]/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {counterData.counters.map((counter, index) => (
            <Reveal key={counter.label} delay={index * 0.08}>
              <div className="border border-[#1b2130]/15 p-7">
                <div className="font-mono-ui text-4xl font-semibold tracking-[-.06em] text-[#1b2130]">
                  {counter.value}
                  {counter.suffix}
                </div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-[.12em] text-[#1b2130]">
                  {counter.label}
                </div>
                <p className="mt-4 text-sm leading-6 text-[#666b76]">
                  {counter.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
