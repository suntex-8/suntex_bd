"use client";

import { Globe, Home } from "lucide-react";
import { whoWeServeData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe size={24} />,
  home: <Home size={24} />,
};

export function WhoWeServe() {
  return (
    <section className="bg-[#e2e1d8] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="text-center">
            <SectionLabel>{whoWeServeData.subTitle}</SectionLabel>
            <h2 className="mt-8 mx-auto max-w-[700px] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#1b2130]">
              Built for global buyers
              <br />
              <span className="text-[#858a91]">and local clients.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {whoWeServeData.segments.map((segment, index) => (
            <Reveal key={segment.title} delay={index * 0.1}>
              <div className="border border-[#1b2130]/15 bg-gradient-to-br from-yellow-300/15 via-white to-white p-8 sm:p-10">
                <div className="text-[#1b2130]">
                  {iconMap[segment.icon] || <Globe size={24} />}
                </div>
                <p className="mt-6 text-2xl font-semibold tracking-[-.04em] text-[#1b2130]">
                  {segment.title}
                </p>
                <p className="mt-4 max-w-[450px] text-sm leading-6 text-[#555b67]">
                  {segment.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
