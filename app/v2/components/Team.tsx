"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teamData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const memberQuotes = [
  "Overseeing end-to-end production across our partner factories with precision and speed.",
  "Bridging buyer expectations with factory capabilities for 15+ years of experience.",
  "Driving digital-first retail strategies for modern garment commerce.",
  "Ensuring every piece meets global quality standards before it ships.",
];

const memberStats = [
  { value: "500+", label: "Orders Managed Yearly" },
  { value: "15+", label: "Years of Experience" },
  { value: "3x", label: "Faster Turnaround" },
  { value: "99%", label: "Quality Pass Rate" },
];

export function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="team"
      className="bg-[#fff000] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <SectionLabel>{teamData.subTitle}</SectionLabel>
              <h2 className="mt-8 max-w-[600px] text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#1b2130]">
                Specialists across
                <br />
                <span className="text-[#858a91]">the value chain.</span>
              </h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scroll("left")}
                className="flex h-11 w-11 items-center justify-center border border-[#1b2130]/20 text-[#1b2130] transition hover:bg-[#1b2130] hover:text-[#fff000]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex h-11 w-11 items-center justify-center border border-[#1b2130]/20 text-[#1b2130] transition hover:bg-[#1b2130] hover:text-[#fff000]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={scrollRef}
          className="mt-14 flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {teamData.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="group relative flex w-[300px] shrink-0 flex-col overflow-hidden border border-[#1b2130]/15 bg-[#1b2130] sm:w-[320px]">
                {/* Top text area */}
                <div className="p-6 pb-0">
                  <h3 className="text-base font-semibold tracking-[-.02em] text-[#f2f0e7]">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#9da1a7]">
                    {memberQuotes[i]}
                  </p>
                </div>

                {/* Image */}
                <div className="mt-5 h-[240px] overflow-hidden px-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale-[.3] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                {/* Stat footer */}
                <div className="flex items-end justify-between p-6 pt-4">
                  <div>
                    <p className="text-4xl font-bold tracking-[-.04em] text-[#f2f0e7]">
                      {memberStats[i].value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[.1em] text-[#8f949d]">
                      {memberStats[i].label}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <button className="inline-block border border-[#1b2130] bg-[#1b2130] px-8 py-3.5 text-xs font-bold uppercase tracking-[.15em] text-[#fff000] transition hover:bg-transparent hover:text-[#1b2130]">
              Get to know us
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
