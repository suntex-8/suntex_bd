"use client";

import { teamData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Team() {
  return (
    <section
      id="team"
      className="bg-[#1b2130] px-5 py-24 text-[#f2f0e7] sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="text-center">
            <SectionLabel light>{teamData.subTitle}</SectionLabel>
            <h2 className="mt-8 mx-auto max-w-[700px] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.065em]">
              Specialists across
              <br />
              <span className="text-[#9da1a7]">the value chain.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamData.members.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <div className="text-center">
                <div className="mx-auto h-[220px] w-[220px] overflow-hidden rounded-full">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-[-.03em]">
                  {member.name}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-[.12em] text-[#8f949d]">
                  {member.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}