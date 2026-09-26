"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { PenTool, Scissors, ShieldCheck, Truck } from "lucide-react";

const capabilities = [
  {
    title: "Design & Product Development",
    desc: "An in-house design and product development facility that takes buyer ideas from concept to sample.",
    icon: PenTool,
    img: "https://images.pexels.com/photos/7256867/pexels-photo-7256867.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Own Sample Section",
    desc: "Dedicated in-house sampling for faster turnaround and earlier sample delivery.",
    icon: Scissors,
    img: "https://images.pexels.com/photos/7147644/pexels-photo-7147644.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Own QC & Inspection",
    desc: "In-house quality control and compliance inspection at every stage of production.",
    icon: ShieldCheck,
    img: "https://images.pexels.com/photos/32318653/pexels-photo-32318653.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Own Logistics & Shipping",
    desc: "Inner logistics and shipping coordination, so orders move smoothly from factory to port.",
    icon: Truck,
    img: "https://images.pexels.com/photos/6169177/pexels-photo-6169177.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const lanes = [
  {
    label: "We make",
    items: ["Knit garments", "Woven garments"],
    note: "Full control over quality, cost, and lead time from fabric to finished garment.",
  },
  {
    label: "We source",
    items: ["Sweaters", "Home textiles", "Socks", "Shoes & leather items"],
    note: "Collaborative partners who support and grow with us — extending our range without stretching our quality standards.",
  },
];

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
};

export function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <motion.div
        className="mx-auto max-w-7xl px-5 lg:px-8"
        variants={group}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.span
          variants={rise}
          className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted"
        >
          <span className="h-px w-8 bg-accent" />
          What We Do
        </motion.span>

        <motion.h2
          variants={rise}
          className="max-w-3xl text-[32px] leading-[1.05] font-semibold text-foreground sm:text-4xl lg:text-[44px]"
        >
          One Partner, Two Ways We Deliver
        </motion.h2>

        <motion.div
          variants={rise}
          className="mt-10 overflow-hidden rounded-2xl border border-line bg-background lg:mt-14"
        >
          {lanes.map((lane, i) => (
            <div
              key={lane.label}
              className={`grid md:grid-cols-[minmax(190px,270px)_1fr] ${
                i === 1 ? "border-t-2 border-accent" : ""
              }`}
            >
              <div className="flex flex-col gap-5 border-b border-line p-7 sm:p-9 md:border-r md:border-b-0 lg:p-11">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-sm font-semibold text-muted">{lane.label}</span>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted">{lane.note}</p>
              </div>

              <div className="p-7 sm:p-9 lg:p-11">
                {lane.items.map((item) => (
                  <p
                    key={item}
                    className="font-display border-t border-line py-4 text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-foreground first:border-t-0 first:pt-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.h3
          variants={rise}
          className="mt-20 border-t border-line pt-14 text-[26px] leading-tight font-semibold text-foreground sm:text-3xl lg:mt-24 lg:pt-16 lg:text-[34px]"
        >
          End-to-End Service Capability
        </motion.h3>

        <motion.div
          variants={rise}
          className="mt-8 flex flex-col gap-3 lg:h-[440px] lg:flex-row lg:gap-3"
        >
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group relative isolate min-h-[280px] overflow-hidden rounded-xl lg:min-h-0 lg:flex-1 lg:transition-[flex-grow] lg:duration-500 lg:ease-[cubic-bezier(0.23,1,0.32,1)] lg:hover:flex-[1.7_1_0%] motion-reduce:transition-none"
            >
              <Image
                src={cap.img}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/15" />
              <div className="relative flex h-full flex-col justify-end p-5 lg:p-6">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-ink">
                  <cap.icon className="h-4 w-4" />
                </span>
                <h4 className="font-display text-lg leading-snug font-semibold text-white sm:text-xl">
                  {cap.title}
                </h4>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
