"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { group, imageIn, rule, textIn, textInSoft } from "@/lib/motion";
import { teamData } from "@/data/SiteSectionData";

/* Ported from the v3 Specialists section: centred masthead, a row of
   circular portraits, and a closing pull-quote. These are the four
   disciplines behind an order, not four named people — a monogram
   treatment keeps it honest while the portrait carries the weight. */
export function Team() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="team"
      className="bg-background py-16 lg:py-20"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <motion.span
          variants={textInSoft}
          className="inline-flex items-center gap-3 text-sm font-semibold text-muted"
        >
          <span className="h-px w-8 bg-accent" />
          {teamData.subTitle}
        </motion.span>

        <motion.h2
          variants={textIn}
          className="mx-auto mt-5 max-w-2xl text-foreground"
          style={{
            fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)",
            lineHeight: 1.12,
            textWrap: "balance",
          }}
        >
          {teamData.headline}
        </motion.h2>

        <motion.p
          variants={textInSoft}
          className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted"
        >
          {teamData.paragraph}
        </motion.p>

        <motion.span
          variants={rule}
          className="mx-auto mt-10 block h-px w-16 origin-center bg-accent"
        />

        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:gap-x-8 lg:grid-cols-4">
          {teamData.members.map((member) => (
            <motion.li key={member.name} variants={textInSoft} className="group">
              <motion.span
                variants={imageIn}
                className="relative mx-auto block h-20 w-20 overflow-hidden rounded-full ring-1 ring-line transition-[box-shadow] duration-300 group-hover:ring-accent motion-reduce:transition-none sm:h-24 sm:w-24"
              >
                <Image
                  src={member.avatar}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 96px, (min-width: 640px) 96px, 80px"
                  className="object-cover"
                />
              </motion.span>

              <h3
                className="mt-4 font-display text-foreground"
                style={{ fontSize: "0.9375rem", lineHeight: 1.3 }}
              >
                {member.name}
              </h3>

              <p className="mt-1.5 text-[11px] leading-snug tracking-[0.08em] text-muted uppercase">
                {member.role}
              </p>
            </motion.li>
          ))}
        </ul>

        <motion.figure variants={textInSoft} className="mx-auto mt-14 max-w-2xl">
          <Quote
            className="mx-auto h-6 w-6 text-accent"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <blockquote className="mt-4">
            <p
              className="font-display text-foreground italic"
              style={{ fontSize: "1.25rem", lineHeight: 1.4 }}
            >
              {teamData.quote}
            </p>
          </blockquote>
          <figcaption className="mt-4 text-[11px] tracking-[0.1em] text-muted uppercase">
            {teamData.quoteAttribution}
          </figcaption>
        </motion.figure>
      </div>
    </motion.section>
  );
}