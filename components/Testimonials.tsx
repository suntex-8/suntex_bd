"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/SiteSectionData";
import { RevealText } from "./RevealText";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const items = testimonialsData.items;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);

  const current = items[index];
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 lg:py-28 testimonial-bg"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {testimonialsData.subTitle}
          </motion.span>
          <RevealText
            text={testimonialsData.headline}
            className="text-[28px] leading-[1.15] text-white sm:text-3xl lg:text-[40px]"
          />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left: small profile photo + badge text */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-accent">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-sm font-bold text-white">
                More Than {testimonialsData.badge.value} Customers
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xs text-sm leading-relaxed text-white/60"
            >
              {testimonialsData.badge.text}
            </motion.p>
          </div>

          {/* Right: large image + quote carousel */}
          <div className="lg:col-span-8">
            <div className="flex gap-6">
              {/* Large image of person */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="hidden h-[340px] w-[240px] shrink-0 overflow-hidden rounded-xl lg:block"
                >
                  <Image
                    src={current.largeImage}
                    alt={current.name}
                    width={480}
                    height={680}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Quote content */}
              <div className="relative flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote className="mb-4 h-8 w-8 text-accent" fill="currentColor" />
                    <p className="text-lg leading-relaxed text-white/90 lg:text-xl lg:leading-relaxed">
                      &ldquo;{current.quote}&rdquo;
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-accent">
                        <Image
                          src={current.avatar}
                          alt={current.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-base font-bold text-white">{current.name}</p>
                        <p className="text-xs font-bold uppercase tracking-wide text-accent">
                          {current.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation: dots + arrows */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex gap-2">
                    {items.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Go to testimonial ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          i === index ? "w-6 bg-accent" : "w-2.5 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="ml-auto flex gap-2">
                    <button
                      aria-label="Previous testimonial"
                      onClick={prev}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/80 text-white transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      aria-label="Next testimonial"
                      onClick={next}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/80 text-white transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
