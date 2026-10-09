"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { PenTool, Scissors, ShieldCheck, Truck } from "lucide-react";
import { FeralGradient } from "@/components/FeralGradient";
import { group, imageIn, textIn } from "@/lib/motion";

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
    items: [
      { label: "Knit garments", img: "/knit.png" },
      { label: "Woven garments", img: "/woven.png" },
    ],
    note: "Full control over quality, cost, and lead time from fabric to finished garment.",
  },
  {
    label: "We source",
    items: [
      { label: "Sweaters", img: "/sweater.png" },
      { label: "Home textiles", img: "/home_apperal.png" },
      { label: "Socks", img: "/socks.png" },
      { label: "Shoes & leather items", img: "/shoes.png" },
    ],
    note: "Collaborative partners who support and grow with us — extending our range without stretching our quality standards.",
  },
];

export function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-surface py-20 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <FeralGradient
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            aspectRatio: "auto",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/25 from-20% via-surface/70 via-52% to-surface to-80%" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8"
        variants={group}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.span
          variants={textIn}
          className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted"
        >
          <span className="h-px w-8 bg-accent" />
          What We Do
        </motion.span>

        <motion.h2
          variants={textIn}
          className="max-w-3xl text-[32px] leading-[1.02] font-normal tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[44px]"
        >
          One Partner, Two Ways We Deliver
        </motion.h2>

        <motion.div
          variants={textIn}
          className="mt-10 overflow-hidden rounded-2xl border border-line bg-background lg:mt-14"
        >
          {lanes.map((lane, i) => (
            <div
              key={lane.label}
              className={`grid md:grid-cols-[minmax(190px,270px)_1fr] ${
                i === 1 ? "border-t-2 border-accent" : ""
              }`}
            >
              <div className="flex flex-col justify-center gap-5 border-b border-line p-7 sm:p-9 md:border-r md:border-b-0 lg:p-11">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-sm bg-accent" />
                  <span className="text-sm font-semibold text-muted">{lane.label}</span>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted">{lane.note}</p>
              </div>

              <div className="p-7 sm:p-9 lg:p-11">
                {lane.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-6 border-b border-line py-1 first:pt-0"
                  >
                    <p className=" text-[clamp(1.35rem,2.5vw,2rem)] font-semibold tracking-[-0.02em] text-foreground">
                      {item.label}
                    </p>

                    {/* No border and a feathered edge, so the thumbnail
                        dissolves into the card instead of sitting on it. */}
                    <motion.span
                      variants={imageIn}
                      className="relative block h-11 w-11 shrink-0 sm:h-13 sm:w-13"
                      style={{
                        WebkitMaskImage:
                          "radial-gradient(70% 70% at 50% 50%, #000 50%, transparent 100%)",
                        maskImage:
                          "radial-gradient(70% 70% at 50% 50%, #000 50%, transparent 100%)",
                      }}
                    >
                      <Image
                        src={item.img}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 52px, 44px"
                        className="object-cover"
                      />
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.h3
          variants={textIn}
          className="mt-20 border-t border-line pt-14 text-[26px] leading-tight font-semibold text-foreground sm:text-3xl lg:mt-24 lg:pt-16 lg:text-[34px]"
        >
          End-to-End Service Capability
        </motion.h3>

        <motion.div
          variants={imageIn}
          className="mt-8 flex flex-col gap-3 lg:h-[440px] lg:flex-row lg:gap-3"
        >
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              tabIndex={0}
              className="capability-panel group relative isolate min-h-[280px] overflow-hidden rounded-xl outline-none lg:min-h-0 lg:flex-1"
            >
              <Image
                src={cap.img}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="capability-image object-cover motion-reduce:transition-none"
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
