"use client";

import { ArrowRight } from "lucide-react";
import { blogData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Blog() {
  return (
    <section className="bg-[#f2f0e7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="text-center">
            <SectionLabel>{blogData.subTitle}</SectionLabel>
            <h2 className="mt-8 mx-auto max-w-[700px] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#1b2130]">
              Industry trends &
              <br />
              <span className="text-[#858a91]">manufacturing updates.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.items.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.08}>
              <article className="group border border-[#1b2130]/10 bg-white overflow-hidden">
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute left-4 top-4 bg-[#fff000] px-3 py-2 text-center">
                    <div className="font-mono-ui text-lg font-semibold leading-none text-[#1b2130]">
                      {post.date.day}
                    </div>
                    <div className="text-[9px] uppercase tracking-[.1em] text-[#1b2130]">
                      {post.date.month}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[.1em] text-[#858a91]">
                    <span>{post.meta.author}</span>
                    <span>{post.meta.comments}</span>
                    <span>{post.date.year}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-tight tracking-[-.03em] text-[#1b2130] line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#666b76] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-5">
                    <span className="group/btn inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#1b2130] transition-colors hover:text-[#6c7200]">
                      Read more
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
