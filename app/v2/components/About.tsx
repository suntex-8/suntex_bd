"use client";

import { ArrowRight } from "lucide-react";
import { aboutData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function About() {
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="bg-[#f2f0e7] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-28">
        <Reveal>
          <SectionLabel>{aboutData.subTitle}</SectionLabel>
          <div className="mt-12 hidden border-l border-[#1b2130]/20 pl-5 text-xs uppercase leading-6 tracking-[.16em] text-[#666b76] sm:block">
            A considered connection
            <br />
            between product
            <br />
            and possibility.
          </div>
          <div className="mt-12 flex items-end gap-4 sm:mt-32">
            <div className="h-28 w-20 bg-[#fff000] p-3 text-[#1b2130]">
              <span className="font-mono-ui text-[10px] leading-3">
                EST.
                <br />
                BANGLADESH
                <br />
                2026
              </span>
            </div>
            <div className="pb-2 text-xs text-[#666b76]">
              Built by specialists
              <br />
              across the value chain.
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-[800px] text-[clamp(2.5rem,5.5vw,5.3rem)] font-semibold leading-[.94] tracking-[-.065em] text-[#1b2130]">
            A manufacturing partner built by{" "}
            <span className="text-[#848a91]">specialists.</span>
          </h2>
          <p className="mt-9 max-w-[650px] text-base leading-7 text-[#555b67] sm:text-lg sm:leading-8">
            {aboutData.paragraph}
          </p>
          <div className="mt-12 grid max-w-[650px] grid-cols-2 gap-x-5 gap-y-7 border-t border-[#1b2130]/20 pt-7 sm:grid-cols-4">
            {aboutData.checkList.map((item, i) => {
              const values = ["200+", "5M+", "1M+", "500"];
              return (
                <div key={item}>
                  <div className="mb-3 text-2xl font-semibold tracking-[-.05em] text-[#1b2130]">
                    {values[i]}
                  </div>
                  <div className="text-[10px] uppercase leading-4 tracking-[.12em] text-[#666b76]">
                    {item.replace(/^\S+ /, "")}
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => goTo("services")}
            className="group mt-12 inline-flex items-center gap-3 border-b border-[#1b2130] pb-2 text-xs font-bold uppercase tracking-[.16em] text-[#1b2130]"
          >
            See how we work{" "}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
