"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { heroSectionData } from "@/data/HeroSectionData";

export function Hero() {
  const [slide, setSlide] = useState(0);
  const current = heroSectionData.slides[slide];

  useEffect(() => {
    const timer = window.setInterval(
      () => setSlide((v) => (v + 1) % heroSectionData.slides.length),
      heroSectionData.autoPlayInterval,
    );
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (id: string) => {
    const hash = id.replace("#", "");
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[720px] items-end bg-[#1b2130] text-[#f2f0e7] sm:min-h-[800px] lg:min-h-[850px]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt="Garment production floor in Bangladesh"
            className="hero-image h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,33,48,.92)_0%,rgba(27,33,48,.62)_45%,rgba(27,33,48,.2)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(27,33,48,.85)_0%,transparent_45%)]" />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28">
        <div className="max-w-[780px]">
          <motion.div
            key={`kicker-${slide}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow mb-7 flex items-center gap-3 text-[#fff000]"
          >
            <span className="h-px w-10 bg-[#fff000]" />
            {current.subTitle}
          </motion.div>
          <motion.h4
            key={`title-${slide}`}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="whitespace-pre-line text-[clamp(3.8rem,9vw,8.5rem)] font-semibold leading-[.87] tracking-[-.075em] text-[#f2f0e7]"
          >
            {current.headline}
          </motion.h4>
          <motion.p
            key={`body-${slide}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-[390px] text-base leading-7 text-[#dedcd3] sm:text-lg"
          >
            {current.paragraph}
          </motion.p>
          <motion.button
            onClick={() => goTo(current.ctaHref)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32 }}
            className="group mt-9 inline-flex items-center gap-4 bg-[#fff000] px-5 py-4 text-xs font-bold uppercase tracking-[.14em] text-[#1b2130] transition-colors hover:bg-[#f2f0e7]"
          >
            {current.cta}
            <ArrowDownRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </motion.button>
        </div>
        <div className="mt-16 flex items-end justify-between border-t border-[#f2f0e7]/25 pt-5">
          <div className="flex gap-2">
            {heroSectionData.slides.map((item, index) => (
              <button
                aria-label={`Show slide ${index + 1}`}
                key={item.headline}
                onClick={() => setSlide(index)}
                className={`h-1 transition-all ${index === slide ? "w-16 bg-[#fff000]" : "w-7 bg-[#f2f0e7]/45 hover:bg-[#f2f0e7]"}`}
              />
            ))}
          </div>
          <div className="hidden items-center gap-4 text-[10px] uppercase tracking-[.18em] text-[#f2f0e7]/60 sm:flex">
            <span>Dhaka · Bangladesh</span>
            <span className="h-px w-12 bg-[#f2f0e7]/40" />
            <span>
              0{slide + 1} / 0{heroSectionData.slides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
