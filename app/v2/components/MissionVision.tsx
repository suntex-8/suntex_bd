"use client";

import { missionVisionData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function MissionVision() {
  const { mission, vision } = missionVisionData;

  return (
    <section className="bg-[#f2f0e7] px-5 sm:px-8 lg:px-12">
      <Reveal>
        <div className="mx-auto max-w-[1400px] border-t border-[#1b2130]/20 pt-9 pb-24 lg:pb-36">
          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <SectionLabel>{mission.heading}</SectionLabel>
              <p className="mt-6 max-w-[500px] text-2xl font-semibold leading-tight tracking-[-.045em] text-[#1b2130]">
                {mission.text}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {mission.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#1b2130]/20 px-3 py-2 text-[10px] uppercase tracking-[.1em] text-[#666b76]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:pt-14">
              <SectionLabel>{vision.heading}</SectionLabel>
              <p className="mt-6 max-w-[500px] text-2xl font-semibold leading-tight tracking-[-.045em] text-[#1b2130]">
                {vision.text}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {vision.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#1b2130]/20 px-3 py-2 text-[10px] uppercase tracking-[.1em] text-[#666b76]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
