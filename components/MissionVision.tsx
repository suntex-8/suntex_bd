"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { missionVisionData } from "@/data/SiteSectionData";

const cardClassName =
  "mv-panel rounded-[28px] border border-white/12 p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14)] sm:p-9";

export function MissionVision() {
  const { mission, vision } = missionVisionData;
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.14,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="mission"
      className="relative isolate overflow-hidden bg-ink py-20 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="mv-aurora-glow absolute inset-0" />
        <div className="mv-stripes absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-ink/45" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[-16%] h-[64vw] w-[64vw] -translate-y-1/2 overflow-hidden opacity-[0.07] sm:left-[-7%] sm:h-[min(46vw,460px)] sm:w-[min(46vw,460px)] sm:opacity-[0.12]"
      >
        <Image
          src="/suntex logo front.png"
          alt=""
          width={1096}
          height={256}
          className="h-full w-auto max-w-none translate-x-[1.5%]"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8"
      >
        <motion.div variants={item} className="mb-10 lg:mb-14">
          <span className="inline-flex items-center rounded-full border border-white/12 bg-ink/70 px-4 py-2.5">
            <Image
              src="/suntex logo front.png"
              alt="SUNTEX Apparel Group"
              width={1096}
              height={256}
              className="h-7 w-auto sm:h-8"
              priority={false}
            />
          </span>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.article variants={item} className={cardClassName}>
            <h2 className="text-[32px] leading-[1.1] text-white sm:text-4xl lg:text-[44px]">
              {mission.heading}
            </h2>
            <span className="mt-5 mb-6 block h-px w-14 bg-accent" />
            <p className="max-w-[46ch] text-lg leading-relaxed text-white/85 sm:text-xl lg:text-[1.375rem] lg:leading-[1.6]">
              {mission.text}
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {mission.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/75 transition-colors hover:border-accent/60 hover:text-accent"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article variants={item} className={cardClassName}>
            <h2 className="text-[32px] leading-[1.1] text-white sm:text-4xl lg:text-[44px]">
              {vision.heading}
            </h2>
            <span className="mt-5 mb-6 block h-px w-14 bg-accent" />
            <p className="max-w-[46ch] text-lg leading-relaxed text-white/85 sm:text-xl lg:text-[1.375rem] lg:leading-[1.6]">
              {vision.text}
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {vision.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/75 transition-colors hover:border-accent/60 hover:text-accent"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
