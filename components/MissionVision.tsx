"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { missionVisionData } from "@/data/SiteSectionData";

const mvStyles = `
.mv-aurora,
.mv-aurora-flute {
  --mv-ink: #0e1013;
  background-image:
    repeating-linear-gradient(100deg, var(--mv-ink) 0%, var(--mv-ink) 7%, transparent 10%, transparent 12%, var(--mv-ink) 16%),
    repeating-linear-gradient(100deg, #fbe87e 8%, #ffd60a 15%, #f7c527 22%, #fff3b0 29%, #fbe87e 36%);
  background-size: 300% 200%, 300% 200%;
  background-position: 50% 50%, 45% 50%;
  animation: mv-drift 52s linear infinite alternate;
}
.mv-aurora {
  filter: blur(10px) saturate(165%);
  opacity: 0.7;
}
.mv-aurora-flute {
  filter: url(#mv-fluted);
  opacity: 0.42;
}
@keyframes mv-drift {
  from { background-position: 50% 50%, 45% 50%; }
  to { background-position: 240% 50%, 205% 50%; }
}
@media (prefers-reduced-motion: reduce) {
  .mv-aurora,
  .mv-aurora-flute {
    animation: none;
  }
}
`;

const filterImageHref =
  "data:image/svg+xml," +
  encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' color-interpolation-filters='sRGB'>
    <g>
      <rect width='1' height='1' fill='black' />
      <rect width='1' height='1' fill='url(#red)' style='mix-blend-mode:screen' />
      <rect width='1' height='1' fill='url(#green)' style='mix-blend-mode:screen' />
      <rect width='1' height='1' fill='url(#yellow)' style='mix-blend-mode:screen' />
    </g>
    <defs>
      <radialGradient id='yellow' cx='0' cy='0' r='1'>
        <stop stop-color='yellow' />
        <stop stop-color='yellow' offset='1' stop-opacity='0' />
      </radialGradient>
      <radialGradient id='green' cx='1' cy='0' r='1'>
        <stop stop-color='green' />
        <stop stop-color='green' offset='1' stop-opacity='0' />
      </radialGradient>
      <radialGradient id='red' cx='0' cy='1' r='1'>
        <stop stop-color='red' />
        <stop stop-color='red' offset='1' stop-opacity='0' />
      </radialGradient>
    </defs>
  </svg>
`);

const cardClassName =
  "rounded-[28px] border border-white/20 bg-ink/60 p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] backdrop-blur-2xl sm:p-9";

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
      <style>{mvStyles}</style>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="mv-aurora absolute inset-0" />
        <div className="mv-aurora-flute absolute inset-0" />
        <div className="absolute inset-0 bg-ink/30" />
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

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        colorInterpolationFilters="sRGB"
        style={{
          position: "absolute",
          opacity: 0,
          height: 0,
          width: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
        focusable="false"
      >
        <filter id="mv-fluted" primitiveUnits="objectBoundingBox">
          <feImage
            x="0"
            y="0"
            result="image_0"
            crossOrigin="anonymous"
            href={filterImageHref}
            preserveAspectRatio="none meet"
            width=".03"
            height="1"
          />
          <feTile in="image_0" result="tile_0" />
          <feGaussianBlur
            stdDeviation=".0001"
            edgeMode="none"
            in="tile_0"
            result="bar_smoothness"
          />
          <feDisplacementMap
            scale=".08"
            xChannelSelector="R"
            yChannelSelector="G"
            in="SourceGraphic"
            in2="bar_smoothness"
            result="displacement_0"
          />
        </filter>
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8"
      >
        <motion.div variants={item} className="mb-10 lg:mb-14">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-ink/50 px-4 py-2.5 backdrop-blur-md">
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
