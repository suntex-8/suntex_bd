"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { group, textIn, textInSoft } from "@/lib/motion";
import { missionVisionData } from "@/data/SiteSectionData";

/* The plate emerges from the right; the type side stays pure ink. */
const PLATE_FADE =
  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 22%, #000 62%)";

const MISSION_SIZE = "clamp(1.55rem, 2.9vw, 2.2rem)";
const VISION_SIZE = "clamp(1.25rem, 2.5vw, 1.75rem)";

function Ledger({ tags }: { tags: string[] }) {
  return (
    <div className="mt-5 border-t border-white/12 pt-4">
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="flex items-center gap-2 text-[11px] text-white/55"
          >
            <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-sm bg-accent" />
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MissionVision() {
  const { mission, vision } = missionVisionData;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="mission"
      className="relative isolate overflow-hidden bg-ink py-16 text-white lg:py-24"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background plate. Luminosity blending pulls it into the site's
          monochrome palette so it can't fight the accent, and the mask
          keeps the left third solid for the mission statement. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ WebkitMaskImage: PLATE_FADE, maskImage: PLATE_FADE }}
      >
        <Image
          src="/suntex-bg-1.webp"
          alt=""
          fill
          sizes="100vw"
          priority={false}
          className="object-cover"
          style={{ mixBlendMode: "luminosity", opacity: 0.34 }}
        />
      </div>

      {/* Scrims: vertical on mobile where the type runs full width,
          horizontal on desktop where the plate stays to the right. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-ink/95 via-ink/85 to-ink/65 lg:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0e1013 0%, rgba(14,16,19,0.94) 34%, rgba(14,16,19,0.7) 62%, rgba(14,16,19,0.25) 100%)",
        }}
      />

      {/* A breath of brand yellow where the plate is strongest. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(58%_62%_at_82%_38%,rgba(247,197,39,0.13),transparent_70%)]"
      />

      {/* Label, mission and vision sit on one row so the section reads as a
          single band instead of a stacked column. */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <motion.span
            variants={textInSoft}
            className="inline-flex items-center gap-3 self-start text-sm font-semibold text-white/55 lg:col-span-2"
          >
            <span className="h-px w-8 shrink-0 bg-accent" />
            Mission &amp; Vision
          </motion.span>

          {/* The mission is the loud statement; the vision reads quietly
              beside it, so the hierarchy matches the importance. */}
          <div className="lg:col-span-5">
            <motion.p variants={textInSoft} className="text-sm font-semibold text-accent">
              {mission.heading}
            </motion.p>

            <motion.h2
              variants={textIn}
              className="font-display mt-3 text-white"
              style={{
                fontSize: MISSION_SIZE,
                lineHeight: 1.22,
                textWrap: "pretty",
              }}
            >
              {mission.text}
            </motion.h2>

            <motion.div variants={textInSoft}>
              <Ledger tags={mission.tags} />
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-white/12 lg:pl-10">
            <motion.p variants={textInSoft} className="text-sm font-semibold text-accent">
              {vision.heading}
            </motion.p>

            <motion.h2
              variants={textIn}
              className="font-display mt-3 text-white/85"
              style={{
                fontSize: VISION_SIZE,
                lineHeight: 1.42,
                textWrap: "pretty",
              }}
            >
              {vision.text}
            </motion.h2>

            <motion.div variants={textInSoft}>
              <Ledger tags={vision.tags} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}