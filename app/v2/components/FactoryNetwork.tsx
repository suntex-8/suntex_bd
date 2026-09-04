"use client";

import { MapPin, CheckCircle } from "lucide-react";
import { factoryNetworkData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function FactoryNetwork() {
  return (
    <section className="bg-[#1b2130] px-5 py-24 text-[#f2f0e7] sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="text-center">
            <SectionLabel light>{factoryNetworkData.subTitle}</SectionLabel>
            <h2 className="mt-8 mx-auto max-w-[700px] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.065em]">
              A deep, reliable
              <br />
              <span className="text-[#9da1a7]">factory network.</span>
            </h2>
            <p className="mt-8 mx-auto max-w-[600px] text-sm leading-7 text-[#b7b9bd]">
              {factoryNetworkData.paragraph}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {factoryNetworkData.locations.map((location) => (
              <div
                key={location}
                className="border border-[#f2f0e7]/15 p-6 transition-colors hover:border-[#fff000]/40"
              >
                <MapPin size={20} className="text-[#fff000]" />
                <div className="mt-5 text-xl font-semibold tracking-[-.03em]">
                  {location}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[.12em] text-[#8f949d]">
                  Manufacturing hub
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 border-t border-[#f2f0e7]/15 pt-8 sm:grid-cols-3">
            {factoryNetworkData.advantages.map((adv) => (
              <div key={adv} className="flex items-center gap-3 text-sm text-[#c4c5c6]">
                <CheckCircle size={16} className="text-[#fff000] shrink-0" />
                {adv}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
