"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { heroSectionData } from "@/data/HeroSectionData";
import { MiniQuoteForm } from "@/components/MiniQuoteForm";

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
          {/* The image stays luminous on the right; the darker left field gives
              the copy and quote panel a deliberate place to land. */}
          <div className="absolute inset-0 bg-linear-to-b from-ink/65 via-ink/30 to-ink/90" />
          <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/55 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(247,197,39,0.14),transparent_24%)]" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-5 pt-12 lg:px-10 lg:pt-16">
        <div className="w-full max-w-3xl pb-28 md:pb-24">
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
                className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.02em] text-white/80 sm:text-sm"
              >
                <span className="h-px w-10 bg-accent" />
                {slide.subTitle}
              </motion.span>

              <motion.h1
                variants={copy}
                custom={1}
                className="text-white"
                style={{
                  fontSize: "clamp(2.7rem, 6.4vw, 5.75rem)",
                  lineHeight: 0.98,
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
                className="max-w-lg text-sm leading-relaxed text-white/70 sm:text-[15px]"
              >
                {slide.paragraph}
              </motion.p>

              <motion.div variants={copy} custom={3} className="pt-1">
                <Button href={slide.ctaHref} variant="inverted" className="ring-1 ring-ink bg-white text-ink hover:bg-white/90">
                  {slide.cta}
                </Button>
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

      {/* Mini quote form — grounded at the exact lower-right tracker position */}
      <div className="absolute right-5 bottom-9 left-auto z-10 w-[calc(100%-2.5rem)] md:w-auto lg:right-10">
        <MiniQuoteForm />
      </div>
    </section>
  );
}