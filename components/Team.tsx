"use client";

import Image from "next/image";
import { useState } from "react";
import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { group, imageIn, rule, textIn, textInSoft } from "@/lib/motion";
import { teamData } from "@/data/SiteSectionData";

export function Team() {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <motion.section
      id="team"
      className="bg-background py-16 lg:py-24"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Masthead: label + headline left, paragraph right */}
        <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.span
              variants={textInSoft}
              className="inline-flex items-center gap-3 text-sm font-semibold text-muted"
            >
              <span className="h-px w-8 bg-accent" />
              {teamData.subTitle}
            </motion.span>

            <motion.h2
              variants={textIn}
              className="mt-5 max-w-2xl text-foreground"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                textWrap: "balance",
              }}
            >
              {teamData.headline}
            </motion.h2>
          </div>

          <motion.p
            variants={textInSoft}
            className="max-w-md text-[15px] leading-relaxed text-muted lg:col-span-5 lg:justify-self-end"
          >
            {teamData.paragraph}
          </motion.p>
        </div>

        <motion.span
          variants={rule}
          className="mt-10 block h-px w-full origin-left bg-line"
        />

        {/* Portrait accordion (lg+) / 2x2 grid (mobile) */}
        <ul
          className="mt-10 grid grid-cols-2 gap-3 lg:flex lg:h-[460px] lg:gap-2"
          onMouseLeave={() => setActive(0)}
        >
          {teamData.members.map((member, i) => {
            const isActive = active === i;
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.li
                key={member.name}
                variants={imageIn}
                tabIndex={0}
                aria-label={`${member.name}, ${member.role}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink outline-none focus-visible:ring-2 focus-visible:ring-accent lg:aspect-auto lg:min-w-0 lg:transition-[flex-grow] lg:duration-700 lg:ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none ${
                  isActive ? "lg:flex-[3_1_0%]" : "lg:flex-[1_1_0%]"
                }`}
              >
                <Image
                  src={member.avatar}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 50vw"
                  className={`object-cover transition-[filter,transform] duration-700 motion-reduce:transition-none ${
                    isActive
                      ? "lg:scale-100"
                      : "lg:scale-105 lg:grayscale lg:brightness-75"
                  }`}
                />

                {/* Bottom scrim so captions always have a floor */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent"
                />

                {/* Index badge */}
                <span
                  aria-hidden="true"
                  className={`absolute top-4 left-4 text-[11px] font-semibold tracking-[0.18em] tabular-nums transition-colors duration-500 lg:top-5 lg:left-5 ${
                    isActive ? "text-accent" : "text-white/70"
                  }`}
                >
                  {num}
                </span>

                {/* Collapsed: vertical name (lg only) */}
                <span
                  aria-hidden="true"
                  className={`font-display absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-lg whitespace-nowrap text-white/90 transition-opacity duration-500 motion-reduce:transition-none lg:block ${
                    isActive ? "opacity-0" : "opacity-100 delay-300"
                  }`}
                  style={{ writingMode: "vertical-rl", transform: "translateX(-50%) rotate(180deg)" }}
                >
                  {member.name}
                </span>

                {/* Expanded: fixed width so text never re-wraps mid-transition */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-4 transition-opacity duration-500 motion-reduce:transition-none lg:w-[340px] lg:max-w-full lg:p-7 ${
                    isActive
                      ? "opacity-100 lg:delay-300"
                      : "lg:pointer-events-none lg:opacity-0"
                  }`}
                >
                  <span
                    className={`mb-3 block h-px bg-accent transition-all duration-700 motion-reduce:transition-none ${
                      isActive ? "w-10" : "w-5"
                    }`}
                  />
                  <h3
                    className="font-display text-white"
                    style={{
                      fontSize: "clamp(1rem, 1.6vw, 1.5rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-snug tracking-[0.1em] text-white/70 uppercase">
                    {member.role}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>

        {/* Pull-quote: oversized, left-anchored with an accent bar */}
        <motion.figure
          variants={textInSoft}
          className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-16"
        >
          <div className="flex items-start lg:col-span-2">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-ink">
              <Quote className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </span>
          </div>

          <div className="lg:col-span-10">
            <blockquote>
              <p
                className="font-display max-w-3xl text-foreground"
                style={{
                  fontSize: "clamp(1.35rem, 2.6vw, 2.1rem)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  textWrap: "balance",
                }}
              >
                {teamData.quote}
              </p>
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 text-[11px] tracking-[0.12em] text-muted uppercase">
              <span className="h-px w-8 bg-accent" />
              {teamData.quoteAttribution}
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </motion.section>
  );
}