"use client";

import { useRef } from "react";
import { MoveUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { productsData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[0] as HTMLElement;
    const amount = card ? card.offsetWidth + 12 : 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="products"
      className="bg-[#d5d4cd] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex items-end justify-between border-b border-[#1b2130]/20 pb-9">
            <div>
              <SectionLabel>{productsData.subTitle}</SectionLabel>
              <h2 className="mt-8 text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[.9] tracking-[-.065em]">
                One roof.
                <br />
                <span className="text-[#858a91]">Many possibilities.</span>
              </h2>
            </div>
            <div className="flex items-end gap-4">
              <div className="hidden text-right text-xs uppercase leading-5 tracking-[.12em] text-[#666b76] sm:block">
                Built in-house
                <br />
                or sourced with care
              </div>
              <div className="hidden gap-2 sm:flex">
                <button
                  onClick={() => scroll("left")}
                  className="flex h-11 w-11 items-center justify-center border border-[#1b2130]/20 text-[#1b2130] transition hover:bg-[#1b2130] hover:text-[#d5d4cd]"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="flex h-11 w-11 items-center justify-center border border-[#1b2130]/20 text-[#1b2130] transition hover:bg-[#1b2130] hover:text-[#d5d4cd]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <div
          ref={scrollRef}
          className="mt-10 flex gap-3 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {productsData.items.map((product, index) => (
            <Reveal key={product.category} delay={index * 0.05}>
              <button
                onClick={() => goTo("contact")}
                className="group relative h-[310px] w-[220px] shrink-0 overflow-hidden text-left sm:h-[360px] sm:w-[260px] lg:h-[390px]"
              >
                <img
                  src={product.image}
                  alt={`${product.category} garments`}
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(27,33,48,.9),transparent_55%)]" />
                <div className="absolute inset-x-5 bottom-5 text-[#f2f0e7]">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-.05em]">
                        {product.category}
                      </h3>
                      <p className="mt-1 text-[10px] uppercase tracking-[.13em] text-[#d2d1c8]">
                        {product.note}
                      </p>
                    </div>
                    <MoveUpRight
                      size={18}
                      className="text-[#fff000] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
