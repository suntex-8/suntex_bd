"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { group, imageIn, rule, textIn, textInSoft } from "@/lib/motion";
import { aboutData } from "@/data/SiteSectionData";

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      className="bg-background py-20 lg:py-28"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.span
              variants={textInSoft}
              className="inline-flex items-center gap-3 text-sm font-semibold text-muted"
            >
              <span className="h-px w-8 bg-accent" />
              {aboutData.subTitle}
            </motion.span>

            <motion.h2
              variants={textIn}
              className="mt-5 max-w-2xl text-[32px] text-foreground sm:text-4xl lg:text-[44px]"
            >
              {aboutData.headline}
            </motion.h2>

            <motion.p
              variants={textInSoft}
              className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted"
            >
              {aboutData.paragraph}
            </motion.p>

            <motion.div
              variants={textInSoft}
              className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6"
            >
              <Link
                href={aboutData.cta.href}
                className="btn-brand group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold"
              >
                {aboutData.cta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </Link>

              <div>
                <p className="text-xs text-muted">{aboutData.phone.label}</p>
                <a
                  href={aboutData.phone.href}
                  className="mt-0.5 block text-lg font-semibold text-foreground hover:text-accent"
                >
                  {aboutData.phone.number}
                </a>
              </div>
            </motion.div>
          </div>

          <motion.figure variants={imageIn} className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-lg ring-1 ring-line">
              <Image
                src={aboutData.images.main}
                alt="SUNTEX garment production"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />

              <figcaption className="absolute bottom-5 left-5 flex items-center gap-3">
                <span className="font-display text-4xl font-semibold text-white">
                  {aboutData.rating.score}
                </span>
                <span>
                  <span className="flex text-accent">
                    {Array.from({ length: aboutData.rating.stars }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3"
                        fill="currentColor"
                        strokeWidth={0}
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                  <span className="mt-1 block max-w-[22ch] text-[11px] leading-snug font-medium text-white/85">
                    {aboutData.rating.caption}
                  </span>
                </span>
              </figcaption>
            </div>
          </motion.figure>
        </div>

        {/* The four figures aren't a checklist — they're what the company
            is specified to do, so they carry the section as its base. */}
        <motion.span
          variants={rule}
          className="mt-16 block h-px w-full origin-left bg-line"
        />

        <dl className="grid grid-cols-2 gap-y-10 pt-10 sm:grid-cols-4 sm:gap-x-8">
          {aboutData.specs.map((spec) => (
            <motion.div key={spec.label} variants={textIn}>
              <dt className="sr-only">{spec.label}</dt>
              <dd>
                <span className="font-display block text-4xl font-semibold text-foreground lg:text-5xl">
                  {spec.value}
                </span>
                <span className="mt-2.5 block max-w-[22ch] text-sm leading-snug text-muted">
                  {spec.label}
                </span>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </motion.section>
  );
}