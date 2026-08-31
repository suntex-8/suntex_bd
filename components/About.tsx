"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Check, Phone, Star } from "lucide-react";
import { aboutData } from "@/data/SiteSectionData";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="bg-[#f6f6f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left content */}
          <div className="lg:col-span-7">
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
                    <Check className="h-4 w-4 text-accent" />
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
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-foreground">
                    <Phone className="h-6 w-6 text-white" />
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
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-end justify-end"
            >
              {/* Smaller left image */}
              <div className="relative z-10 -mr-10 h-[300px] w-[240px] overflow-hidden rounded-xl shadow-xl sm:h-[340px] sm:w-[270px]">
                <Image
                  src={aboutData.images.main}
                  alt="About Suntex - craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Taller right image */}
              <div className="relative h-[380px] w-[280px] overflow-hidden rounded-xl shadow-2xl sm:h-[460px] sm:w-[310px]">
                <Image
                  src={aboutData.images.overlay}
                  alt="About Suntex - team"
                  fill
                  className="object-cover"
                />

                {/* 4.9 rating badge — bottom-left of larger image */}
                <div className="absolute bottom-5 left-5 z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-4xl font-bold text-white">
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
                  <p className="mt-1 max-w-[200px] whitespace-pre-line text-[11px] leading-snug font-medium text-white/90">
                    {aboutData.rating.caption}
                  </p>
                </div>
              </div>

              {/* Vertical text — right edge */}
              <span className="absolute -right-10 top-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                {aboutData.tagText}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
