"use client";

import { ArrowUpRight, Eye, Rocket } from "lucide-react";
import { missionVisionData, counterData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const aboutImage =
  "https://images.pexels.com/photos/11359034/pexels-photo-11359034.jpeg";

export function MissionVision() {
  const { mission, vision } = missionVisionData;
  const stats = counterData.counters;

  return (
    <section className="bg-[#f2f0e7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="text-center">
            <p className="text-sm   text-gray-600">
              Who we are
            </p>
            <h2 className="mt-8 mx-auto max-w-[800px] text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#1b2130]">
              Connecting ideas with{" "}
              <span className="text-[#858a91]">reliable manufacturing.</span>
            </h2>
            <p className="mt-6 mx-auto max-w-[600px] text-base leading-7 text-[#555b67]">
              {counterData.paragraph}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
          {/* Left column — image + vision/mission cards */}
          <div className="grid gap-5">
            <Reveal>
              <div className="relative h-[240px] overflow-hidden sm:h-[280px]">
                <img
                  src={aboutImage}
                  alt="SUNTEX team at work"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.08}>
                <div className="relative overflow-hidden border border-[#1b2130]/10 bg-white p-5">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-300/15 via-transparent to-transparent" />
                  <div className="relative">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1b2130]/15">
                      <Eye size={15} className="text-[#1b2130]" />
                    </div>
                    <p className="mt-4 text-xl font-semibold tracking-[-.03em] text-[#1b2130]">
                      {vision.heading}
                    </p>
                    <p className="mt-2 text-[13px] leading-5 text-[#666b76]">
                      {vision.text}
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="relative overflow-hidden border border-[#1b2130]/10 bg-white p-5">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-[#1b2130]/[0.06] via-transparent to-transparent" />
                  <div className="relative">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1b2130]/15">
                      <Rocket size={15} className="text-[#1b2130]" />
                    </div>
                    <p className="mt-4 text-xl font-semibold tracking-[-.03em] text-[#1b2130]">
                      {mission.heading}
                    </p>
                    <p className="mt-6 text-[13px] leading-5 text-[#666b76]">
                      {mission.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right column — 2x2 stat cards */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.06 + index * 0.06}>
                <div className="group relative flex h-full flex-col overflow-hidden border border-[#1b2130]/10 bg-gradient-to-br from-yellow-300/15 via-white to-white p-5 transition-colors hover:border-[#1b2130]/25">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-[#1b2130]/[0.04] via-transparent to-transparent" />
                  <div className="relative mb-auto flex justify-end">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1b2130]/15 text-[#1b2130] transition-colors group-hover:bg-[#1b2130] group-hover:text-white">
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                  <div className="relative mt-6">
                    <div className=" text-xl font-semibold tracking-[-.06em] text-[#1b2130] sm:text-2xl">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="mt-1.5 text-[10px] uppercase tracking-[.1em] text-[#858a91]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
