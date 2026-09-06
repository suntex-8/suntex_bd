"use client";

import { ArrowRight } from "lucide-react";
import { aboutData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";

export function About() {
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="bg-[#f2f0e7] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[.45fr_1fr] lg:gap-20">
          {/* Left side: badge + logo + tagline */}
          <Reveal>
            <div className="flex flex-col gap-12">
              <div className="flex items-end gap-4">
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
                  <img
                src="/suntex logo front.png"
                alt="Suntex Apparel Group"
                className="h-8 w-auto mb-4  bg-black p-2 object-contain opacity-80"
              />
                  Built by specialists
                  <br />
                  across the value chain.
                </div>
               
              </div>
             
              {/*  */}{/* Stats */}
              <div className=" grid max-w-[650px] grid-cols-2 gap-x-5 gap-y-7 border-t border-[#1b2130]/20 pt-7 sm:grid-cols-4 items-right">
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
              </div> <button
                onClick={() => goTo("services")}
                className="group mt-12 inline-flex items-center gap-3 border-b border-[#1b2130] pb-2 text-xs font-bold uppercase tracking-[.16em] text-[#1b2130]"
              >
                See how we work{" "}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </Reveal>

          {/* Right side: text content */}
          <Reveal delay={0.1} className="text-right">
            <div className="ml-auto max-w-[850px]">
              {/* <span className="mb-8 inline-block h-px w-16 bg-[#fff000]" /> */}
              <p className=" ml-automax-w-[800px] text-[clamp(1.8rem,4vw,3.5rem)] font-medium leading-[1.2] tracking-[-.03em] text-[#1b2130]">
                SUNTEX Apparel Group is a Bangladesh-based garment manufacturing and sourcing company formed by specialists across the apparel value chain.
              </p>
              <p className=" ml-auto mt-12 max-w-[650px] text-base leading-7 text-[#555b67] sm:text-lg sm:leading-8">
                We combine our own knit and woven production with a trusted partner network for every other category a modern buyer needs — giving international and local clients one reliable point of contact for quality, adaptability, and on-time delivery.
              </p>

              

              
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
