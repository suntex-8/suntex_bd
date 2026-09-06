"use client";

import { Factory, ShieldCheck } from "lucide-react";
import { trustData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const factoryImage = "https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg";

export function Advantage() {
  return (
    <section
      id="advantage"
      className="bg-[#e2e1d8] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-28">
        <Reveal>
          <SectionLabel>Why SUNTEX</SectionLabel>
          <h2 className="mt-10 max-w-[580px] text-[clamp(2.8rem,5vw,5.2rem)] font-semibold leading-[.92] tracking-[-.065em]">
            Quietly serious about the{" "}
            <span className="text-[#858a91]">details.</span>
          </h2>
          <p className="mt-8 max-w-[430px] text-base leading-7 text-[#555b67]">
            {trustData.paragraph}
          </p>
          <div className="mt-12 grid max-w-[430px] grid-cols-2 gap-3">
            <div className="bg-[#fff000] p-5">
              <Factory size={21} />
              <div className="mt-8 text-3xl font-semibold tracking-[-.06em]">
                {trustData.stats[0].value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[.12em]">
                Partner factories
              </div>
            </div>
            <div className="bg-[#1b2130] p-5 text-[#f2f0e7]">
              <ShieldCheck size={21} className="text-[#fff000]" />
              <div className="mt-8 text-3xl font-semibold tracking-[-.06em]">
                5-stage
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[.12em] text-[#b7b9bd]">
                Own QC process
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative h-[420px] overflow-hidden sm:h-[560px]">
            <img
              src={factoryImage}
              alt="SUNTEX partner factory production line"
              className="h-full w-full object-cover grayscale-[.25]"
            />
            <div className="absolute bottom-0 left-0 w-[70%] bg-[#fff000] p-6 sm:p-8">
              <span className="eyebrow text-[#1b2130]">Our commitment</span>
              <p className="mt-4 text-xl font-semibold leading-tight tracking-[-.04em] text-[#1b2130] sm:text-2xl">
                The right product,
                <br />
                the right quality,
                <br />
                on time.
              </p>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-4 border-t border-[#1b2130]/20 pt-7 sm:grid-cols-3">
            {trustData.bars.map((bar) => (
              <div key={bar.label}>
                <div className="font-mono-ui text-2xl text-[#1b2130]">
                  {bar.value}%
                </div>
                <div className="mt-2 text-[10px] uppercase leading-4 tracking-[.1em] text-[#666b76]">
                  {bar.label}
                </div>
                <div className="mt-3 h-1 bg-[#c5c5bb]">
                  <div
                    className="h-full bg-[#1b2130]"
                    style={{ width: `${bar.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
