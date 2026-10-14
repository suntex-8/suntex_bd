"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Clock,
  ClipboardList,
  Factory,
  Handshake,
  Lightbulb,
  PackageCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { group, rule, textIn, textInSoft } from "@/lib/motion";
import { moqData, processData } from "@/data/SiteSectionData";
import { heroSectionData } from "@/data/HeroSectionData";

/* Borrowed from the hero so the page doesn't introduce a second photo. */
const plate = heroSectionData.slides[0].image;

const processIcons: LucideIcon[] = [
  ClipboardList,
  Lightbulb,
  Handshake,
  Factory,
  Truck,
  PackageCheck,
];

export function Moq() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="moq"
      className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      {/* Backdrop: a quiet texture, not a feature */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src={plate}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/50" />
      </div>

      <motion.div
        className="mx-auto max-w-7xl px-5 lg:px-8"
        variants={group}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Tier 1: label + headline + the MOQ number */}
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.span
              variants={textInSoft}
              className="inline-flex items-center gap-3 text-[13px] text-white/60"
            >
              <span className="h-px w-8 bg-accent" />
              {moqData.subTitle}
            </motion.span>

            <motion.h2
              variants={textIn}
              className="mt-6 max-w-2xl font-light text-white"
              style={{
                fontSize: "clamp(1.9rem, 4.2vw, 3.25rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                textWrap: "balance",
              }}
            >
              {moqData.headline}
            </motion.h2>

            <motion.p
              variants={textInSoft}
              className="mt-6 max-w-lg text-[15px] leading-[1.7] font-light text-white/60"
            >
              {moqData.standard.philosophy}
            </motion.p>
          </div>

          {/* The loudest element on the page */}
          <motion.div
            variants={textIn}
            className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12"
          >
            <span
              className="font-display block font-extralight text-white"
              style={{
                fontSize: "clamp(5rem, 13vw, 9.5rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.06em",
              }}
            >
              {moqData.standard.value}
            </span>
            <span className="mt-5 block max-w-[28ch] text-sm leading-relaxed text-white/60">
              {moqData.standard.scope}
            </span>
          </motion.div>
        </div>

        <motion.span
          variants={rule}
          className="mt-16 block h-px w-full origin-left bg-white/10 lg:mt-20"
        />

        {/* Tier 2: process. Title-only steps, so they read at a glance. */}
        <motion.ol
          variants={group}
          className="relative mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4"
        >
          <div
            aria-hidden="true"
            className="absolute top-6 right-[8%] left-[8%] hidden h-px bg-white/15 lg:block"
          />
          {processData.steps.map((step, index) => {
            const Icon = processIcons[index];

            return (
              <motion.li
                key={step.title}
                variants={textInSoft}
                className="relative flex flex-col items-start gap-4 lg:items-center lg:text-center"
              >
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-ink text-accent">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-[10px] font-medium tracking-[0.2em] text-white/35 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1.5 max-w-[16ch] text-[14px] leading-snug font-normal text-white">
                    {step.title}
                  </h3>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Lead time: a small, calm footnote to the process */}
        <motion.p
          variants={textInSoft}
          className="mt-12 flex items-center gap-2.5 text-[13px] font-light text-white/55 lg:justify-center"
        >
          <Clock className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} aria-hidden="true" />
          Lead time: from 1 week to 1 month, depending on the order.
        </motion.p>

        {/* Tier 3: special track, a single quiet card */}
        <motion.div
          variants={textIn}
          className="mt-14 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-12 md:items-center md:gap-12 md:p-8 lg:mt-20"
        >
          <div className="md:col-span-5">
            <p className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] text-accent uppercase">
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
              {moqData.specialTrack.availability}
            </p>
            <h3
              className="font-display mt-3 font-light text-white"
              style={{
                fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {moqData.specialTrack.target}
            </h3>
          </div>
          <p className="max-w-xl text-[13px] leading-[1.7] font-light text-white/60 md:col-span-6 md:col-start-7">
            {moqData.specialTrack.useCase}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}