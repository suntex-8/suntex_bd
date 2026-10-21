"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ClipboardList,
  Factory,
  Handshake,
  Lightbulb,
  PackageCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { group, textIn, textInSoft } from "@/lib/motion";
import { moqData, processData } from "@/data/SiteSectionData";
import { heroSectionData } from "@/data/HeroSectionData";
import { Button } from "@/components/ui/button";

/* Reused from the hero for the card image, so no new photo is introduced. */
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

  /* The last word of the headline gets the accent, as in the reference. */
  const words = moqData.headline.split(" ");
  const lastWord = words.pop();

  return (
    <section
      id="moq"
      className="relative isolate overflow-hidden bg-background py-12 text-foreground sm:py-14 lg:flex lg:min-h-[100svh] lg:items-center lg:py-16"
    >
      <motion.div
        className="mx-auto w-full max-w-7xl px-5 lg:px-8"
        variants={group}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {/* Top: headline block + MOQ number */}
        <div className="grid items-center gap-7 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.span
              variants={textInSoft}
              className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-muted uppercase sm:text-xs"
            >
              <span className="h-px w-8 bg-accent sm:w-10" />
              {moqData.subTitle}
            </motion.span>

            <motion.h2
              variants={textIn}
              className="mt-4 max-w-2xl font-light text-foreground"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                textWrap: "balance",
              }}
            >
              {words.join(" ")} <span className="text-accent">{lastWord}</span>
            </motion.h2>

            <motion.p
              variants={textInSoft}
              className="mt-4 max-w-lg text-[14px] leading-[1.6] font-light text-muted sm:text-[15px]"
            >
              {moqData.standard.philosophy}
            </motion.p>

            <motion.div variants={textInSoft} className="mt-6">
              <Button
                href="#contact"
                className="bg-gradient-to-r from-[#070D1D] to-[#1E3A8A] text-white hover:shadow-lg hover:shadow-blue-900/25"
              >
                Let&apos;s Build Together
              </Button>
            </motion.div>
          </div>

          {/* MOQ number with corner brackets */}
          <motion.div
            variants={textIn}
            className="lg:col-span-5 lg:justify-self-end"
          >
            <div className="relative px-6 py-5 sm:px-8 sm:py-7">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-8 w-4 border-t border-l border-accent"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-8 w-4 border-b border-l border-accent"
              />
              <span
                className="font-display block font-normal text-foreground"
                style={{
                  fontSize: "clamp(4rem, 9vw, 6.5rem)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.05em",
                }}
              >
                {moqData.standard.value}
              </span>
              <span className="mt-3 block max-w-[28ch] text-[14px] leading-snug text-muted sm:text-[15px]">
                {moqData.standard.scope}
              </span>
            </div>
          </motion.div>
        </div>

       
        

        {/* Special track card */}
        <motion.div
          variants={textIn}
          className="mt-10 grid gap-4 rounded-2xl border border-blue-700/15 bg-gradient-to-br from-blue-900/[0.04] to-blue-700/[0.02] p-4 sm:p-5 lg:mt-12 lg:grid-cols-12 lg:items-center lg:gap-5 lg:p-6"
        >
          <div className="lg:col-span-5">
            <p className="text-[10px] font-medium tracking-[0.22em] text-muted uppercase">
              {moqData.specialTrack.availability}
            </p>
            <p
              className="font-display mt-2 font-normal text-foreground"
              style={{
                fontSize: "clamp(1.5rem, 1.7vw, 2.15rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
              }}
            >
              {moqData.specialTrack.target}
            </p>
            <p className="mt-2 max-w-md text-[13px] leading-[1.55] font-light text-muted">
              {moqData.specialTrack.useCase}
            </p>
            <a
              href="#contact"
              className="group mt-3 inline-flex items-center gap-2.5 text-sm font-medium text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
              Explore More
            </a>
          </div>

          <div className="relative aspect-[16/6] overflow-hidden rounded-xl ring-1 ring-foreground/10 lg:col-span-5 lg:aspect-[16/7]">
            <Image
              src={plate}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-[#070D1D]/45 to-[#1E3A8A]/35"
            />
          </div>

          {/* Lead time, set as a quiet side column */}
          <div className="border-t border-line pt-4 lg:col-span-2 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-5">
            <p className="text-[10px] font-medium tracking-[0.22em] text-muted uppercase">
              Lead time
            </p>
            <span className="mt-2 block h-px w-6 bg-accent" />
            <p
              className="font-display mt-2 font-light text-foreground"
              style={{ fontSize: "1.25rem", lineHeight: 1.2 }}
            >
              1 week to 1 month
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed font-light text-muted">
              Depending on the order.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}