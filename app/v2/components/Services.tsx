"use client";

import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const serviceImages: Record<string, string> = {
  knit: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=1200",
  woven: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1200",
  garment: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=1200",
  fiber: "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const serviceTags: Record<string, string> = {
  knit: "5M+ pieces / month",
  woven: "1M+ pieces / month",
  garment: "Partner sourced",
  fiber: "Concept to sample",
};

export function Services() {
  return (
    <section
      id="services"
      className="bg-[#1b2130] px-5 py-24 text-[#f2f0e7] sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col justify-between gap-10 border-b border-[#f2f0e7]/20 pb-12 lg:flex-row lg:items-end">
            <div>
              <SectionLabel light>{servicesData.subTitle}</SectionLabel>
              <h2 className="mt-8 max-w-[720px] text-[clamp(2.7rem,5.5vw,5.5rem)] font-semibold leading-[.9] tracking-[-.065em]">
                One partner.
                <br />
                <span className="text-[#9da1a7]">Two ways we deliver.</span>
              </h2>
            </div>
            <p className="max-w-[300px] text-sm leading-6 text-[#c4c5c6]">
              In-house capability where control matters. Trusted partners
              where range matters. One accountable team throughout.
            </p>
          </div>
        </Reveal>
        <div className="divide-y divide-[#f2f0e7]/20">
          {servicesData.items.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="group grid gap-7 py-8 transition-colors lg:grid-cols-[70px_1fr_1fr_auto] lg:items-center lg:gap-10">
                <div className="font-mono-ui text-xs text-[#fff000]">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-.04em] sm:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-[390px] text-sm leading-6 text-[#b7b9bd]">
                  {service.description}
                </p>
                <div className="flex items-center justify-between gap-6 lg:justify-end">
                  <span className="eyebrow text-[#8f949d]">
                    {serviceTags[service.icon] || ""}
                  </span>
                  <div className="relative hidden h-16 w-24 overflow-hidden sm:block">
                    <img
                      src={serviceImages[service.icon] || ""}
                      alt={`${service.title} production`}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                    />
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-[#fff000] transition-transform group-hover:translate-x-1"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
