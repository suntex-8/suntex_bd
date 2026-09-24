"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { counterData } from "@/data/SiteSectionData";
import { RevealText } from "./RevealText";

function useCountUp(target: number, start: boolean, duration = 1500) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return ref;
}

function CounterStat({
  value,
  suffix,
  label,
  description,
  delay,
}: (typeof counterData.counters)[number] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const numRef = useCountUp(value, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-line pb-6 pt-4"
    >
      <p className="font-display text-5xl leading-none text-foreground lg:text-[56px]">
        <span ref={numRef}>0</span>
        {suffix}
      </p>
      <h4 className="mt-2 text-sm font-semibold tracking-wide text-foreground">
        {label}
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {description}
      </p>
    </motion.div>
  );
}

export function Counter() {
  return (
    <section
      id="innovation"
      className="relative overflow-hidden bg-background py-20 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left image — tall */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[420px] overflow-hidden rounded-lg ring-1 ring-line lg:h-[600px]"
            >
              <Image
                src={counterData.image}
                alt={counterData.headline}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-7">
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-3 text-sm font-semibold text-muted"
            >
              <span className="h-px w-8 bg-accent" />
              {counterData.subTitle}
            </motion.span>

            {/* Headline */}
            <h2 className="relative mb-6 text-[32px] leading-[1.08] text-foreground sm:text-4xl lg:text-[44px]">
              <RevealText text={counterData.headline} />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10 max-w-2xl text-base leading-relaxed text-muted"
            >
              {counterData.paragraph}
            </motion.p>

            {/* Stats grid — 2×2, no cards, with line separators */}
            <div className="grid gap-x-12 gap-y-2 sm:grid-cols-2">
              {counterData.counters.map((c, i) => (
                <CounterStat key={c.label} {...c} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

