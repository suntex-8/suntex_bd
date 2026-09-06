"use client";

import { Play } from "lucide-react";
import { qualityData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const stageImages = [
  "https://images.pexels.com/photos/4498310/pexels-photo-4498310.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export function QualityAssurance() {
  const stages = qualityData.stages;

  return (
    <section
      id="quality"
      className="bg-[#fff000] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Desktop: two-column bento */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
          {/* Left column: Headers + Stage 1 + Stage 2 */}
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="px-2 pb-4">
                <SectionLabel>Quality, by design</SectionLabel>
                <h2 className="mt-8 max-w-[500px] text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#1b2130]">
                  Nothing gets through{" "}
                  <span className="text-[#858a91]">by accident.</span>
                </h2>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=Cn4G2lZ_g2I",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="mt-8 flex items-center gap-3 self-start text-xs font-bold uppercase tracking-[.15em] text-[#1b2130]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1b2130]">
                    <Play size={14} fill="currentColor" />
                  </span>
                  See our approach
                </button>
              </div>
            </Reveal>

            {/* Stage 1 */}
            <Reveal delay={0.06}>
              <div className="group relative h-[280px] overflow-hidden border border-[#1b2130]/15">
                <img
                  src={stageImages[0]}
                  alt={stages[0].stage}
                  className="h-full w-full object-cover grayscale-[.2] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2130]/85 via-[#1b2130]/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 top-6 flex flex-col justify-end">
                  <span className="eyebrow mb-2 text-[#fff000]">Stage 01</span>
                  <h3 className="text-2xl font-semibold tracking-[-.04em] text-[#f2f0e7]">
                    {stages[0].stage}
                  </h3>
                  <p className="mt-2 max-w-[400px] text-sm leading-6 text-[#d2d1c8]">
                    {stages[0].description}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Stage 2 */}
            <Reveal delay={0.12}>
              <div className="group relative h-[280px] overflow-hidden border border-[#1b2130]/15">
                <img
                  src={stageImages[1]}
                  alt={stages[1].stage}
                  className="h-full w-full object-cover grayscale-[.2] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2130]/85 via-[#1b2130]/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 top-6 flex flex-col justify-end">
                  <span className="eyebrow mb-2 text-[#fff000]">Stage 02</span>
                  <h3 className="text-2xl font-semibold tracking-[-.04em] text-[#f2f0e7]">
                    {stages[1].stage}
                  </h3>
                  <p className="mt-2 max-w-[400px] text-sm leading-6 text-[#d2d1c8]">
                    {stages[1].description}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column: Stage 3 + Stage 4 + Stage 5 — fills left height */}
          <div className="flex flex-col gap-4">
            <Reveal delay={0.18} className="flex-1">
              <div className="group relative h-full min-h-[200px] overflow-hidden border border-[#1b2130]/15">
                <img
                  src={stageImages[2]}
                  alt={stages[2].stage}
                  className="h-full w-full object-cover grayscale-[.2] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2130]/85 via-[#1b2130]/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 top-6 flex flex-col justify-end">
                  <span className="eyebrow mb-2 text-[#fff000]">Stage 03</span>
                  <h3 className="text-xl font-semibold tracking-[-.04em] text-[#f2f0e7]">
                    {stages[2].stage}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#d2d1c8]">
                    {stages[2].description}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24} className="flex-1">
              <div className="group relative h-full min-h-[200px] overflow-hidden border border-[#1b2130]/15">
                <img
                  src={stageImages[3]}
                  alt={stages[3].stage}
                  className="h-full w-full object-cover grayscale-[.2] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2130]/85 via-[#1b2130]/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 top-6 flex flex-col justify-end">
                  <span className="eyebrow mb-2 text-[#fff000]">Stage 04</span>
                  <h3 className="text-xl font-semibold tracking-[-.04em] text-[#f2f0e7]">
                    {stages[3].stage}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#d2d1c8]">
                    {stages[3].description}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="flex-1">
              <div className="group relative h-full min-h-[200px] overflow-hidden border border-[#1b2130]/15">
                <img
                  src={stageImages[4]}
                  alt={stages[4].stage}
                  className="h-full w-full object-cover grayscale-[.2] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2130]/85 via-[#1b2130]/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 top-6 flex flex-col justify-end">
                  <span className="eyebrow mb-2 text-[#fff000]">Stage 05</span>
                  <h3 className="text-xl font-semibold tracking-[-.04em] text-[#f2f0e7]">
                    {stages[4].stage}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#d2d1c8]">
                    {stages[4].description}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="lg:hidden">
          <Reveal>
            <div className="mb-10">
              <SectionLabel>Quality, by design</SectionLabel>
              <h2 className="mt-8 max-w-[600px] text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#1b2130]">
                Nothing gets through{" "}
                <span className="text-[#858a91]">by accident.</span>
              </h2>
              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=Cn4G2lZ_g2I",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="mt-9 flex items-center gap-3 self-start text-xs font-bold uppercase tracking-[.15em] text-[#1b2130]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1b2130]">
                  <Play size={14} fill="currentColor" />
                </span>
                See our approach
              </button>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {stages.map((stage, i) => (
              <Reveal key={stage.step} delay={i * 0.06}>
                <div className="group relative h-[220px] overflow-hidden border border-[#1b2130]/15">
                  <img
                    src={stageImages[i]}
                    alt={stage.stage}
                    className="h-full w-full object-cover grayscale-[.2] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b2130]/85 via-[#1b2130]/20 to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 top-6 flex flex-col justify-end">
                    <span className="eyebrow mb-2 text-[#fff000]">Stage 0{stage.step}</span>
                    <h3 className="text-xl font-semibold tracking-[-.04em] text-[#f2f0e7]">
                      {stage.stage}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#d2d1c8]">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-[#555b67]">
            {qualityData.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
