"use client";

import { processData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Process() {
  return (
    <section
      id="process"
      className="bg-[#f2f0e7] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col justify-between gap-9 md:flex-row md:items-end">
            <div>
              <SectionLabel>{processData.subTitle}</SectionLabel>
              <h2 className="mt-9 max-w-[700px] text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[.9] tracking-[-.065em]">
                From first sketch
                <br />
                <span className="text-[#858a91]">to final shipment.</span>
              </h2>
            </div>
            <p className="max-w-[300px] text-sm leading-6 text-[#666b76]">
              A straightforward process, designed to keep decisions visible
              and momentum intact.
            </p>
          </div>
        </Reveal>
        <div className="mt-20 grid border-t border-[#1b2130]/20 md:grid-cols-2 lg:grid-cols-3">
          {processData.steps.map((step, index) => (
            <Reveal key={step.order} delay={index * 0.04}>
              <div className="min-h-[200px] border-b border-[#1b2130]/20 py-8 pr-5 sm:pr-10 md:border-r md:pl-7 md:first:pl-0 lg:min-h-[235px]">
                <span className="font-mono-ui text-xs text-[#9a9da0]">
                  {step.order}
                </span>
                <h3 className="mt-14 text-xl font-semibold tracking-[-.04em]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[230px] text-sm leading-6 text-[#666b76]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
