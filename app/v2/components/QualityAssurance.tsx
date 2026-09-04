"use client";

import { Check, Play } from "lucide-react";
import { qualityData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function QualityAssurance() {
  return (
    <section
      id="quality"
      className="bg-[#fff000] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <SectionLabel>Quality, by design</SectionLabel>
          <h2 className="mt-10 max-w-[520px] text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[.9] tracking-[-.07em] text-[#1b2130]">
            Nothing gets
            <br />
            through <span className="text-[#858a91]">by accident.</span>
          </h2>
          <p className="mt-8 max-w-[390px] text-base leading-7 text-[#303543]">
            {qualityData.caption}
          </p>
          <button
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=Cn4G2lZ_g2I",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="mt-9 flex items-center gap-3 text-xs font-bold uppercase tracking-[.15em] text-[#1b2130]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1b2130]">
              <Play size={14} fill="currentColor" />
            </span>{" "}
            See our approach
          </button>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border-t border-[#1b2130]/30">
            {qualityData.stages.map((stage, index) => (
              <div
                key={stage.step}
                className="group flex items-start gap-6 border-b border-[#1b2130]/30 py-6 transition-colors hover:bg-[#f2df00] sm:gap-10"
              >
                <span className="font-mono-ui pt-1 text-xs text-[#666b76]">
                  0{stage.step}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold tracking-[-.04em] text-[#1b2130]">
                    {stage.stage}
                  </h3>
                  <p className="mt-2 max-w-[420px] text-sm leading-6 text-[#4e5360]">
                    {stage.description}
                  </p>
                </div>
                <Check
                  size={18}
                  className="mt-1 text-[#1b2130] opacity-40 transition-opacity group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
