"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { group, imageIn, rule, textIn, textInSoft } from "../lib/motion";
import { aboutData } from "../data/SiteSectionData";

export function About() {
  const prefersReducedMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);

  /* Scroll-linked: the logo turns a little and drifts as the section
     passes through the viewport. Static when reduced motion is on. */
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-28, 28]);
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <motion.section
      id="about"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#070D1D] via-[#0F1C3F] to-[#1E3A8A] py-20 text-white lg:py-28"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      {/* One soft warm glow behind the logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-10%] -z-10 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-accent/10 blur-[140px] lg:h-[720px] lg:w-[720px]"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.span
              variants={textInSoft}
              className="inline-flex items-center gap-3 text-[13px] text-white/60"
            >
              <span className="h-px w-8 bg-accent" />
              {aboutData.subTitle}
            </motion.span>

            <motion.h2
              variants={textIn}
              className="mt-6 max-w-xl font-light text-white"
              style={{
                fontSize: "clamp(2rem, 4.6vw, 3.5rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                textWrap: "balance",
              }}
            >
              {aboutData.headline}
            </motion.h2>

            <motion.p
              variants={textInSoft}
              className="mt-6 max-w-lg text-[15px] leading-relaxed font-light text-white/60 sm:text-[17px]"
            >
              {aboutData.paragraph}
            </motion.p>

            <motion.span
              variants={rule}
              className="mt-10 block h-px w-full max-w-lg origin-left bg-white/10"
            />

            <motion.div
              variants={textInSoft}
              className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6"
            >
              <Button href={aboutData.cta.href}>{aboutData.cta.label}</Button>

              <div>
                <p className="text-xs text-white/50">{aboutData.phone.label}</p>
                <a
                  href={aboutData.phone.href}
                  className="mt-0.5 block text-lg font-light text-white transition-colors hover:text-accent"
                >
                  {aboutData.phone.number}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Stage: logo + photo card */}
          <motion.div
            ref={stageRef}
            variants={imageIn}
            className="relative mx-auto aspect-square w-full max-w-[460px] lg:col-span-6 lg:max-w-none"
          >
            {/* Orbit rings */}
            <span
              aria-hidden="true"
              className="absolute inset-[6%] rounded-full border border-white/[0.07]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-[18%] rounded-full border border-dashed border-white/[0.07]"
            />

            {/* Logo. The PNG's black background is dropped by the screen
                blend, so it sits directly on the ink section. */}
            <motion.div
              className="absolute inset-[4%]"
              style={prefersReducedMotion ? undefined : { rotate, y }}
            >
              <Image
                src="/3d_logo.png"
                alt="SUNTEX gold emblem"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-contain mix-blend-screen"
              />
            </motion.div>

            {/* Photo card, overlapping the lower left */}
            <motion.figure
              className="absolute -bottom-6 left-0 z-20 w-[44%] max-w-[240px] sm:-bottom-4 sm:left-[2%] lg:-bottom-8 lg:left-[-4%]"
              style={prefersReducedMotion ? undefined : { y: photoY }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <Image
                  src="https://images.pexels.com/photos/18359551/pexels-photo-18359551.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="SUNTEX garment production"
                  fill
                  sizes="(min-width: 1024px) 240px, 44vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent"
                />

                <figcaption className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                  <span className="font-display block text-2xl leading-none font-light text-white sm:text-3xl">
                    {aboutData.rating.score}
                  </span>
                  <span className="mt-1.5 flex text-accent">
                    {Array.from({ length: aboutData.rating.stars }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-2.5 w-2.5"
                          fill="currentColor"
                          strokeWidth={0}
                          aria-hidden="true"
                        />
                      ),
                    )}
                  </span>
                  <span className="mt-1.5 block text-[10px] leading-snug text-white/80 sm:text-[11px]">
                    {aboutData.rating.caption}
                  </span>
                </figcaption>
              </div>
            </motion.figure>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}