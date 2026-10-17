"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  Check,
  Handshake,
  Leaf,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { group, imageIn, textIn, textInSoft } from "@/lib/motion";
import { missionVisionData } from "@/data/SiteSectionData";

/* Swap these for your final photos. Unsplash needs
   images.unsplash.com in next.config remotePatterns. */
const MISSION_IMAGE = {
  src: "https://images.pexels.com/photos/18359551/pexels-photo-18359551.jpeg?auto=compress&cs=tinysrgb&w=1600",
  alt: "Garment being finished by hand in a SUNTEX workshop",
};
const VISION_IMAGE = {
  src: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?auto=format&fit=crop&w=1600&q=80",
  alt: "Cotton plant, a symbol of sustainable fashion",
};

const PILLARS: { label: string; note: string; icon: LucideIcon }[] = [
  { label: "Sustainability", note: "For a healthier planet", icon: Leaf },
  { label: "People", note: "For a stronger tomorrow", icon: Users },
  { label: "Quality", note: "In every detail", icon: ShieldCheck },
  { label: "Partnership", note: "For shared success", icon: Handshake },
];

const STATEMENT_STYLE = {
  fontSize: "clamp(1.05rem, 1.6vw, 1.4rem)",
  lineHeight: 1.22,
  letterSpacing: "-0.015em",
  textWrap: "balance",
} as const;

export function MissionVision() {
  const { mission, vision } = missionVisionData;
  const reduced = useReducedMotion();

  return (
    <motion.section
      id="mission"
      className="relative overflow-hidden bg-background py-12 text-foreground sm:py-14 lg:py-16"
      variants={group}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.08 }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div>
          <motion.span
            variants={textInSoft}
            className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-muted uppercase"
          >
            <span className="h-px w-8 bg-accent" />
            Mission &amp; Vision
          </motion.span>

          <motion.h2
            variants={textIn}
            className="mt-4 font-light text-foreground"
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              textWrap: "balance",
            }}
          >
            Crafting a better tomorrow,{" "}
            <span className="text-muted/70">together.</span>
          </motion.h2>

          <motion.p
            variants={textInSoft}
            className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]"
          >
            Our work brings responsible manufacturing, thoughtful design, and
            long-term partnerships together.
          </motion.p>
        </div>

        {/* Mission row: card (8) + image (4) */}
        <div className="mt-12 grid gap-3 lg:mt-14 lg:h-[300px] lg:grid-cols-12 lg:gap-0">
          <motion.article
            variants={textIn}
            className="rounded-[1.5rem] bg-ink/[0.04] p-5 ring-1 ring-ink/[0.06] sm:p-7 lg:col-span-8 lg:flex lg:items-center lg:rounded-l-[120px] lg:rounded-r-[1.5rem] lg:py-6 lg:pr-10 lg:pl-16"
          >
            <div className="grid w-full gap-5 sm:grid-cols-[1.25fr_1fr] sm:gap-0">
              <div className="sm:pr-8">
                <p className="text-[10px] font-medium tracking-[0.22em] text-muted uppercase">
                  {mission.heading}
                </p>
                <p
                  className="font-display mt-2.5 font-normal text-foreground"
                  style={STATEMENT_STYLE}
                >
                  {mission.text}
                </p>
              </div>

              <ul className="grid content-center gap-2.5 border-t border-ink/10 pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
                {mission.tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center gap-2.5 text-[12.5px] text-foreground/75 sm:text-[13px]"
                  >
                    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent text-ink">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <motion.figure
            variants={imageIn}
            className="relative h-40 overflow-hidden rounded-[1.5rem] bg-ink sm:h-48 lg:col-span-4 lg:h-full lg:rounded-l-[140px] lg:rounded-r-[1.5rem]"
          >
            <Image
              src={MISSION_IMAGE.src}
              alt={MISSION_IMAGE.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent lg:bg-linear-to-l lg:from-ink/65"
            />
            <figcaption className="absolute bottom-4 left-4 text-[9px] leading-[1.9] font-medium tracking-[0.24em] text-white/85 uppercase lg:top-1/2 lg:right-6 lg:bottom-auto lg:left-auto lg:-translate-y-1/2">
              Better quality.
              <br />
              Greater impact.
            </figcaption>
          </motion.figure>
        </div>

        {/* Vision row: image (4) + dark card (8, overlapping) */}
        <div className="mt-3 grid gap-3 lg:mt-4 lg:h-[230px] lg:grid-cols-12 lg:gap-0">
          <motion.figure
            variants={imageIn}
            className="relative order-2 h-40 overflow-hidden rounded-[1.5rem] bg-ink/10 sm:h-48 lg:order-1 lg:col-span-4 lg:h-full lg:rounded-l-[1.5rem] lg:rounded-r-[140px]"
          >
            <Image
              src={VISION_IMAGE.src}
              alt={VISION_IMAGE.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-ink/65 via-transparent to-transparent"
            />
            <figcaption className="absolute bottom-4 left-4 text-[9px] leading-[1.9] font-medium tracking-[0.24em] text-white/85 uppercase lg:bottom-5 lg:left-5">
              Sustainable fashion
              <br />
              for future generations
            </figcaption>
          </motion.figure>

          <motion.article
            variants={textIn}
            className="relative z-10 order-1 rounded-[1.5rem] bg-ink p-5 text-white sm:p-7 lg:order-2 lg:col-span-8 lg:-ml-16 lg:flex lg:items-center lg:rounded-l-[120px] lg:py-6 lg:pr-10 lg:pl-24"
          >
            <div className="grid w-full gap-5 sm:grid-cols-[1.25fr_1fr] sm:gap-0">
              <div className="sm:pr-8">
                <p className="text-[10px] font-medium tracking-[0.22em] text-accent uppercase">
                  {vision.heading}
                </p>
                <p
                  className="font-display mt-2.5 font-normal text-white"
                  style={STATEMENT_STYLE}
                >
                  {vision.text}
                </p>
              </div>

              <ul className="grid content-center gap-2.5 border-t border-white/10 pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
                {vision.tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center gap-2.5 text-[12.5px] text-white/75 sm:text-[13px]"
                  >
                    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-accent/60 text-accent">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>

        {/* Pillars */}
        <motion.ul
          variants={textInSoft}
          className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 lg:mt-10 lg:grid-cols-4 lg:gap-y-0"
        >
          {PILLARS.map(({ label, note, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-3 lg:justify-center lg:border-l lg:border-line lg:first:border-l-0"
            >
              <Icon
                className="h-5 w-5 shrink-0 text-foreground/70"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <span className="min-w-0">
                <span className="block text-[10px] font-medium tracking-[0.2em] text-foreground uppercase">
                  {label}
                </span>
                <span className="mt-0.5 block text-[11px] leading-snug font-light text-muted">
                  {note}
                </span>
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}