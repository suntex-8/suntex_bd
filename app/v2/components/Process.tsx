"use client";

import { processData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const processImage =
  "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1920";

export function Process() {
  const steps = processData.steps;
  const topRow = steps.slice(0, 3);
  const bottomRow = steps.slice(3, 6);

  return (
    <section id="process" className="relative overflow-hidden">
      {/* Background image with blur + overlay */}
      <div className="absolute inset-0">
        <img
          src={processImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1b2130]/75 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="text-center">
              <SectionLabel light>{processData.subTitle}</SectionLabel>
              <h2 className="mt-8 mx-auto max-w-[700px] text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#f2f0e7]">
                From first sketch
                <br />
                <span className="text-[#9da1a7]">to final shipment.</span>
              </h2>
            </div>
          </Reveal>

          {/* Desktop: 3x2 grid with SVG connectors */}
          <div className="relative mt-16 hidden lg:block">
            {/* SVG connectors layer */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              fill="none"
            >
              {/* Horizontal lines — top row */}
              <line x1="33.33%" y1="40" x2="66.66%" y2="40" stroke="#f2f0e7" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="8 6" />
              {/* Horizontal lines — bottom row */}
              <line x1="33.33%" y1="calc(100% - 40px)" x2="66.66%" y2="calc(100% - 40px)" stroke="#f2f0e7" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="8 6" />
              {/* Vertical lines — col 1 */}
              <line x1="16.66%" y1="40" x2="16.66%" y2="calc(100% - 40px)" stroke="#f2f0e7" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="8 6" />
              {/* Vertical lines — col 2 */}
              <line x1="50%" y1="40" x2="50%" y2="calc(100% - 40px)" stroke="#f2f0e7" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="8 6" />
              {/* Vertical lines — col 3 */}
              <line x1="83.33%" y1="40" x2="83.33%" y2="calc(100% - 40px)" stroke="#f2f0e7" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="8 6" />
            </svg>

            <div className="grid grid-cols-3 gap-x-5 gap-y-10">
              {topRow.map((step, i) => (
                <Reveal key={step.order} delay={i * 0.08}>
                  <ProcessCard step={step} />
                </Reveal>
              ))}
              {bottomRow.map((step, i) => (
                <Reveal key={step.order} delay={0.24 + i * 0.08}>
                  <ProcessCard step={step} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet: stacked with connectors */}
          <div className="relative mt-14 space-y-4 lg:hidden">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-0 bottom-0 border-l-2 border-dashed border-[#f2f0e7]/25" />

            {steps.map((step, i) => (
              <Reveal key={step.order} delay={i * 0.06}>
                <div className="relative pl-12">
                  {/* Connector dot */}
                  <div className="absolute left-[17px] top-5 h-2.5 w-2.5 rounded-full border-2 border-[#f2f0e7]/40 bg-white" />
                  <ProcessCard step={step} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step }: { step: { order: string; title: string; description: string } }) {
  return (
    <div className="group relative overflow-hidden border border-[#1b2130]/10 bg-white p-5 transition-colors hover:border-[#1b2130]/20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1b2130]/[0.04] via-transparent to-transparent" />
      <div className="relative">
        <p className="text-xl font-semibold tracking-[-.02em] text-[#1b2130]">
          {step.title}
        </p>
        <p className="mt-1.5 text-[12px] leading-5 text-[#666b76]">
          {step.description}
        </p>
      </div>
    </div>
  );
}
