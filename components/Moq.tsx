"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { group, textIn } from "@/lib/motion";
import { moqData } from "@/data/SiteSectionData";
import { heroSectionData } from "@/data/HeroSectionData";

/* The band borrows the hero's opening plate instead of introducing a
   second photograph. Scrims follow the hero's recipe — a flat seat for
   contrast plus a left-weighted wash — so the column of type stays
   legible on any crop while the right side of the frame keeps its
   detail. */
const plate = heroSectionData.slides[0].image;

export function Moq() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-ink py-16 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src={plate}
          alt=""
          fill
          sizes="90vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/85 via-ink/60 to-ink/30" />
      </div>

      <motion.div
        className="relative mx-auto max-w-7xl px-5 lg:px-8"
        variants={group}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.span
          variants={textIn}
          className="mb-5 inline-flex items-center gap-3 text-sm font-semibold text-white/75"
        >
          <span className="h-px w-8 bg-accent" />
          {moqData.subTitle}
        </motion.span>

        <motion.h2
          variants={textIn}
          className="max-w-3xl text-[32px] leading-[1.08] text-white sm:text-4xl lg:text-[44px]"
        >
          {moqData.headline}
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-10">
          <motion.p
            variants={textIn}
            className="max-w-xl text-[17px] leading-relaxed text-white/70 md:col-span-6"
          >
            {moqData.standard.philosophy}
          </motion.p>

          <motion.div
            variants={textIn}
            className="md:col-span-5 md:col-start-8"
          >
            <span
              className="font-display block leading-none font-semibold text-white"
              style={{ fontSize: "clamp(4.5rem, 8vw, 6.5rem)", letterSpacing: "-0.05em" }}
            >
              {moqData.standard.value}
            </span>
            <span className="mt-2 block max-w-[24ch] text-sm leading-snug text-white/60">
              {moqData.standard.scope}
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={textIn}
          className="mt-10 grid gap-5 border-t border-white/15 pt-6 md:grid-cols-12 md:items-start md:gap-10"
        >
          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-accent">
              {moqData.specialTrack.availability}
            </p>
            <h3 className="font-display mt-1 text-lg font-semibold text-white">
              {moqData.specialTrack.target}
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-white/70 md:col-span-6 md:col-start-7">
            {moqData.specialTrack.useCase}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
