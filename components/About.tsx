"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Check, Factory, Phone, Star } from "lucide-react";
import { aboutData } from "@/data/SiteSectionData";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#edf2fb] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left content */}
          <div className="min-w-0 lg:col-span-7">
            <SectionHeader data={aboutData} />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-base leading-relaxed text-foreground/70"
            >
              {aboutData.paragraph}
            </motion.p>

            <div className="mb-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {aboutData.checkList.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/30">
                    <Check className="h-4 w-4 text-black" />
                  </span>
                  <span className="text-sm font-medium text-foreground/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Horizontal line separator */}
            <div className="mb-8 border-t border-black/10" />

            {/* Feature icons — dark navy rounded-square boxes */}
            <div className="mb-8 flex flex-wrap gap-8">
              {aboutData.featureItems.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground">
                    <Factory className="h-6 w-6 text-white" />
                  </span>
                  <p className="whitespace-pre-line text-sm font-bold text-foreground">
                    {f.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href={aboutData.cta.href}
                className="btn-brand inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  {aboutData.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/20">
                  <Phone className="h-6 w-6 text-foreground" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-foreground/60">
                    {aboutData.phone.label}
                  </p>
                  <a
                    href={aboutData.phone.href}
                    className="text-lg font-bold text-foreground hover:text-accent"
                  >
                    {aboutData.phone.number}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right images — two overlapping images */}
          <div className="relative min-w-0 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto flex max-w-[420px] items-end justify-center gap-2 sm:gap-4 lg:max-w-none lg:justify-end"
            >
              {/* Smaller left image */}
              <div className="relative z-10 h-[220px] w-[170px] shrink-0 overflow-hidden rounded-xl shadow-xl sm:h-[280px] sm:w-[220px] lg:-mr-10 lg:h-[340px] lg:w-[270px]">
                <Image
                  src={aboutData.images.main}
                  alt="About Suntex - craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Taller right image */}
              <div className="relative h-[280px] w-[200px] shrink-0 overflow-hidden rounded-xl shadow-2xl sm:h-[360px] sm:w-[260px] lg:h-[460px] lg:w-[310px]">
                <Image
                  src={aboutData.images.overlay}
                  alt="About Suntex - team"
                  fill
                  className="object-cover"
                />

                {/* 4.9 rating badge — bottom-left of larger image */}
                <div className="absolute bottom-5 left-5 z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-3xl font-bold text-white sm:text-4xl">
                      {aboutData.rating.score}
                    </span>
                    <div>
                      <div className="flex text-accent">
                        {Array.from({ length: aboutData.rating.stars }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3"
                              fill="currentColor"
                              strokeWidth={0}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="mt-1 max-w-[150px] whitespace-pre-line text-[10px] leading-snug font-medium text-white/90 sm:max-w-[200px] sm:text-[11px]">
                    {aboutData.rating.caption}
                  </p>
                </div>
              </div>

              {/* Vertical text — right edge */}
              <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 rotate-90 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/30 lg:inline-flex">
                {aboutData.tagText}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
