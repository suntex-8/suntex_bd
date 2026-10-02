"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { heroSectionData } from "@/data/HeroSectionData";
import { SocialIcon } from "@/components/SocialIcon";

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* Copy enters from the left, one beat apart, so the eye reads down the
   block in the order it was written. */
const copy: Variants = {
  enter: (i: number) => ({
    opacity: 0,
    x: -32,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.09 },
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
  exit: () => ({
    opacity: 0,
    x: 24,
    transition: { duration: 0.35, ease: EASE },
  }),
};

/* The rule under the CTA draws itself in after the button lands. */
const wipe: Variants = {
  hidden: { scaleX: 0 },
  show: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.7, ease: EASE, delay: 0.1 + i * 0.09 },
  }),
};

/* The plate settles rather than cuts — a slow drift out keeps the
   crossfade from reading as a flicker. */
const plate: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  const slides = heroSectionData.slides;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      heroSectionData.autoPlayInterval
    );
    return () => clearTimeout(t);
  }, [index, paused, slides.length]);

  const slide = slides[index];
  const current = String(index + 1).padStart(2, "0");

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background plate */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          variants={plate}
          initial="hidden"
          animate="show"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          {/* Two scrims: a vertical one to seat the type, a horizontal one
              that keeps the right half readable for the social rail. */}
          <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/45 to-ink/80" />
          <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/45 to-ink/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-5 lg:px-10 mt-10">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-start gap-4 sm:gap-5"
            >
              <motion.span
                variants={copy}
                custom={0}
                className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.02em] text-white/85"
              >
                <span className="h-px w-10 bg-accent" />
                {slide.subTitle}
              </motion.span>

              <motion.h1
                variants={copy}
                custom={1}
                className="text-white"
                style={{
                  fontSize: "clamp(2.05rem, 4.6vw, 3.5rem)",
                  lineHeight: 1.06,
                  textWrap: "balance",
                }}
              >
                {slide.headline.split("\n").map((line, i, arr) => (
                  <span key={i} className="block">
                    {line}
                    {i < arr.length - 1 && <br className="hidden sm:block" />}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                variants={copy}
                custom={2}
                className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-[15px]"
              >
                {slide.paragraph}
              </motion.p>

              <motion.div variants={copy} custom={3} className="pt-1">
                <Link
                  href={slide.ctaHref}
                  className="btn-brand inline-flex items-center gap-2.5 rounded-sm px-8 py-4 text-sm font-bold"
                >
                  <span className="relative z-10 inline-flex items-center gap-2.5">
                    {slide.cta}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>

              <motion.span
                variants={wipe}
                custom={4}
                className="mt-2 block h-px w-32 origin-left bg-accent/60"
              />
            </motion.div>
</AnimatePresence>

      {/* The plate above only ever mounts the active slide, so advancing
          the carousel used to request a 1920px image on the spot and
          flash an empty frame while it arrived. These render off-screen
          and `preload`, which hoists a <link rel="preload"> per slide into
          the head — by the time a slide becomes active its bytes are
          already in the HTTP cache. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-0 w-0 overflow-hidden"
      >
        {slides.map((s, i) =>
          i === index ? null : (
            <Image
              key={`preload-${s.image}`}
              src={s.image}
              alt=""
              width={1920}
              height={1280}
              preload
              sizes="100vw"
              className="h-0 w-0"
            />
          ),
        )}
      </div>

        </div>
      </div>

      {/* Slide counter, bottom left */}
      <div className="absolute bottom-9 left-5 z-10 flex items-baseline gap-2 lg:left-10">
        <span className="font-display text-2xl leading-none text-accent tabular-nums">
          {current}
        </span>
        <span className="text-xs text-white/40 tabular-nums">
          / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Right vertical social rail */}
      <div className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
        <span className="h-20 w-px bg-white/30" />
        <div className="flex flex-col gap-3">
          {heroSectionData.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/80 transition-colors hover:border-accent hover:text-accent"
            >
              <SocialIcon name={s.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
        <span className="text-[10px] tracking-[0.18em] text-white/50 uppercase">
          {heroSectionData.followLabel}
        </span>
      </div>

      {/* Slider dots */}
      <div className="absolute right-5 bottom-9 z-10 flex items-center gap-2 lg:right-10">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-accent" : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}