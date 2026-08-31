"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { heroSectionData } from "@/data/HeroSectionData";

const contentVariants: Variants = {
  enter: () => ({ opacity: 0, x: -60 }),
  center: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
  exit: () => ({ opacity: 0, x: 60, transition: { duration: 0.4 } }),
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
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative yellow line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-accent/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 lg:px-8">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial="enter"
              animate="center"
              exit="exit"
              custom={0}
              className="flex flex-col items-start gap-5"
            >
              <motion.span
                variants={contentVariants}
                custom={0}
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                {slide.subTitle}
              </motion.span>
              <motion.h1
                variants={contentVariants}
                custom={1}
                className="text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                {slide.headline.split("\n").map((line, i) => (
                  <span key={i} className={i === 1 ? "text-accent" : "text-white"}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </motion.h1>
              <motion.p
                variants={contentVariants}
                custom={2}
                className="max-w-lg text-sm leading-relaxed text-white/70 sm:text-base"
              >
                {slide.paragraph}
              </motion.p>
              <motion.div variants={contentVariants} custom={3}>
                <Link
                  href={slide.ctaHref}
                  className="btn-brand inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    {slide.cta}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Left vertical social rail */}
      <div className="absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
        <span className="h-20 w-px bg-white/30" />
        <div className="flex flex-col gap-3">
          {heroSectionData.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[10px] font-bold text-white/80 transition-colors hover:border-accent hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
        <span className="text-[10px] uppercase tracking-widest text-white/50">
          {heroSectionData.followLabel}
        </span>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-accent" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Bottom-right decorative accent */}
      <div className="absolute bottom-0 right-0 h-24 w-1 bg-accent/40" />
    </section>
  );
}
