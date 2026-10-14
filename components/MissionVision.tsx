"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { group, textIn, textInSoft } from "@/lib/motion";
import { missionVisionData } from "@/data/SiteSectionData";

type Key = "mission" | "vision";

const PLATE_FADE =
  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 30%, #000 80%)";

const SIZES: Record<Key, string> = {
  mission: "clamp(1.5rem, 2.6vw, 2.25rem)",
  vision: "clamp(1.25rem, 2.1vw, 1.75rem)",
};

export function MissionVision() {
  const { mission, vision } = missionVisionData;
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState<Key>("mission");

  const panels = [
    { key: "mission" as const, data: mission },
    { key: "vision" as const, data: vision },
  ];

  return (
    <motion.section
      id="mission"
      className="relative isolate overflow-hidden bg-surface py-20 text-foreground lg:py-28"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Faint plate behind everything */}
      <div
        
      >
        
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.h3
          variants={textInSoft}
          className="mb-8 inline-flex items-center gap-3 text-sm font-semibold text-muted lg:mb-10"
        >
          <span className="h-px w-8 shrink-0 bg-accent" />
          Mission & Vision
        </motion.h3>

        <motion.div
          variants={textInSoft}
          className="flex flex-col gap-3 lg:h-[430px] lg:flex-row"
        >
          {panels.map(({ key, data }) => {
            const isActive = active === key;

            return (
              <div
                key={key}
                tabIndex={0}
                role="group"
                aria-label={data.heading}
                onMouseEnter={() => setActive(key)}
                onFocus={() => setActive(key)}
                onClick={() => setActive(key)}
                className={`relative overflow-hidden rounded-[1.75rem] border outline-none transition-[flex-grow,background-color,color,border-color] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent motion-reduce:transition-none lg:min-w-0 ${
                  isActive
                    ? "border-accent/30 bg-accent text-ink shadow-[0_20px_50px_rgba(247,197,39,0.16)] lg:flex-[3_1_0%]"
                    : "border-line bg-background text-foreground lg:flex-[1_1_0%]"
                }`}
              >
                {/* Collapsed state — vertical label (desktop only) */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 hidden flex-col items-start justify-between p-8 transition-opacity duration-500 motion-reduce:transition-none lg:flex ${
                    isActive ? "pointer-events-none opacity-0" : "opacity-100 delay-300"
                  }`}
                >
                  <span className="h-px w-8 bg-accent" />
                  <span
                    className="font-display text-2xl text-foreground/75"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {data.heading}
                  </span>
                </div>

                {/* Expanded state — fixed width so text never reflows mid-transition */}
                <div
                  className={`relative flex flex-col p-7 transition-opacity duration-500 motion-reduce:transition-none lg:absolute lg:inset-y-0 lg:left-0 lg:w-[560px] lg:max-w-full lg:justify-between lg:p-10 ${
                    isActive ? "opacity-100 lg:delay-300" : "lg:pointer-events-none lg:opacity-0"
                  }`}
                >
                  <div>
                    <motion.p
                      variants={textInSoft}
                      className={`flex items-center gap-3 text-sm font-semibold transition-colors duration-500 ${
                        isActive ? "text-ink/70" : "text-muted"
                      }`}
                    >
                      <span
                        className={`h-px w-8 transition-colors duration-500 ${
                          isActive ? "bg-ink/50" : "bg-line"
                        }`}
                      />
                      {data.heading}
                    </motion.p>

                    <motion.p
                      variants={textIn}
                      className="font-display mt-5"
                      style={{
                        fontSize: SIZES[key],
                        lineHeight: 1.25,
                        letterSpacing: "-0.01em",
                        textWrap: "balance",
                      }}
                    >
                      {data.text}
                    </motion.p>
                  </div>

                  <motion.ul
                    variants={textInSoft}
                    className="relative z-10 mt-8 flex flex-wrap gap-2"
                  >
                    {data.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-colors duration-500 ${
                          isActive
                            ? "border-ink/25 text-ink/80"
                            : "border-line text-muted"
                        }`}
                      >
                        {tag}
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}