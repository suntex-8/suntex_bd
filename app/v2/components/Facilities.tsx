"use client";

import { facilitiesData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Facilities() {
  return (
    <section
      id="facilities"
      className="bg-[#f2f0e7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="text-center">
            <SectionLabel>{facilitiesData.subTitle}</SectionLabel>
            <h2 className="mt-8 mx-auto max-w-[600px] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#1b2130]">
              See where it&apos;s{" "}
              <span className="text-[#858a91]">made.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilitiesData.items.map((facility, index) => (
            <Reveal key={facility.title} delay={index * 0.08}>
              <div className="group relative h-[280px] overflow-hidden sm:h-[340px]">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2130]/80 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="text-lg font-semibold tracking-[-.03em] text-[#f2f0e7]">
                    {facility.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
