"use client";

import { motion } from "motion/react";
import {
  ProgressSlider,
  SliderBtn,
  SliderBtnGroup,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progressive-carousel";
import { Check, PenTool, Scissors, ShieldCheck, Truck } from "lucide-react";

const capabilities = [
  {
    title: "Design & Product Development",
    desc: "An in-house design and product development facility that takes buyer ideas from concept to sample.",
    icon: PenTool,
    img: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Own Sample Section",
    desc: "Dedicated in-house sampling for faster turnaround and earlier sample delivery.",
    icon: Scissors,
    img: "https://images.pexels.com/photos/9776239/pexels-photo-9776239.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Own QC & Inspection",
    desc: "In-house quality control and compliance inspection at every stage of production.",
    icon: ShieldCheck,
    img: "https://images.pexels.com/photos/4498310/pexels-photo-4498310.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Own Logistics & Shipping",
    desc: "Inner logistics and shipping coordination, so orders move smoothly from factory to port.",
    icon: Truck,
    img: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const inHouseItems = ["Knit garments", "Woven garments"];
const inHouseNote = "Full control over quality, cost, and lead time from fabric to finished garment.";

const partnerItems = [
  "Sweaters",
  "Home textiles",
  "Socks",
  "Shoes & leather items",
];
const partnerNote = "Collaborative partners who support and grow with us — extending our range without stretching our quality standards.";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#edf2fb] py-20 lg:py-28">
      {/* Background SVG decorations */}
      <SewingSVG />
      <SpoolSVG />
      <ScissorsSVG />
      <WeavePatternSVG />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Pill nav + heading */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          What We Do
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl text-[32px] leading-[1.15] font-normal text-foreground sm:text-4xl lg:text-[40px]"
        >
          One Partner, Two Ways We Deliver
        </motion.h2>

        {/* Narrative dialogue split */}
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative border-t border-foreground/15 pt-6"
          >
            <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-foreground/60">
              We make
            </div>

            <div className="space-y-2">
              {inHouseItems.map((item) => (
                <p
                  key={item}
                  className="text-[clamp(1.1rem,2vw,2rem)] leading-[1.1] tracking-[-0.05em] text-foreground/85"
                >
                  {item}
                </p>
              ))}
            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/60">
              {inHouseNote}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative border-t border-foreground/15 pt-6 md:border-l md:border-foreground/15 md:pl-8"
          >
            <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-foreground/60">
              We source
            </div>

            <div className="space-y-2">
              {partnerItems.map((item) => (
                <p
                  key={item}
                  className="text-[clamp(1.1rem,2vw,2rem)] leading-[1.1] tracking-[-0.05em] text-foreground/85"
                >
                  {item}
                </p>
              ))}
            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/60">
              {partnerNote}
            </p>
          </motion.div>
        </div>
      </div>

      {/* End-to-End Service Capability — full-width progressive carousel */}
      <div className="relative z-10 mt-20 w-full border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 pt-16 text-[28px] leading-tight font-normal text-foreground sm:text-3xl lg:text-[36px]"
          >
            End-to-End Service Capability
          </motion.h3>
        </div>

        <ProgressSlider activeSlider={capabilities[0].title}>
          <SliderContent>
            {capabilities.map((cap) => (
              <SliderWrapper key={cap.title} value={cap.title}>
                <div className="relative h-[350px] w-full sm:h-[400px] xl:h-[450px]">
                  <img
                    src={cap.img}
                    alt={cap.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/40" />
                  <div className="absolute inset-0 flex items-center justify-center px-5">
                    <div className="max-w-2xl text-center">
                      <cap.icon className="mx-auto mb-4 h-10 w-10 text-accent" />
                      <h4 className="mb-3 text-2xl font-semibold text-white sm:text-3xl">
                        {cap.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </SliderWrapper>
            ))}
          </SliderContent>

          <SliderBtnGroup className="relative z-20 grid w-full grid-cols-2 border-t border-foreground/10 bg-white md:grid-cols-4">
            {capabilities.map((cap) => (
              <SliderBtn
                key={cap.title}
                value={cap.title}
                className="border-r border-foreground/10 p-4 text-left last:border-r-0"
                progressBarClass="bg-accent/20 h-full"
              >
                <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/5 text-foreground">
                  <cap.icon className="h-4 w-4" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground sm:text-sm">
                  {cap.title}
                </p>
              </SliderBtn>
            ))}
          </SliderBtnGroup>
        </ProgressSlider>
      </div>
    </section>
  );
}

function SewingSVG() {
  return (
    <svg className="pointer-events-none absolute -left-4 top-[8%] h-[220px] w-[220px] opacity-[0.05]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M50 10 L50 75" />
      <ellipse cx="50" cy="80" rx="8" ry="12" />
      <path d="M50 10 L55 5 L60 12 L55 15 Z" fill="currentColor" stroke="none" />
      <path d="M58 78 Q70 60 85 65 Q95 68 90 80 Q85 90 70 85 Q60 82 58 78" strokeDasharray="3 3" />
    </svg>
  );
}

function SpoolSVG() {
  return (
    <svg className="pointer-events-none absolute -right-4 bottom-[5%] h-[200px] w-[200px] opacity-[0.05]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="30" y="20" width="40" height="60" rx="4" />
      <ellipse cx="50" cy="20" rx="20" ry="6" />
      <ellipse cx="50" cy="80" rx="20" ry="6" />
      <path d="M35 30 Q50 35 65 30" />
      <path d="M35 40 Q50 45 65 40" />
      <path d="M35 50 Q50 55 65 50" />
      <path d="M35 60 Q50 65 65 60" />
      <path d="M35 70 Q50 75 65 70" />
    </svg>
  );
}

function ScissorsSVG() {
  return (
    <svg className="pointer-events-none absolute -left-2 bottom-[8%] h-[160px] w-[160px] opacity-[0.05]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="25" cy="75" r="12" />
      <circle cx="75" cy="75" r="12" />
      <line x1="33" y1="67" x2="67" y2="20" />
      <line x1="67" y1="67" x2="33" y2="20" />
    </svg>
  );
}

function WeavePatternSVG() {
  return (
    <svg className="pointer-events-none absolute -right-2 top-[5%] h-[240px] w-[240px] opacity-[0.04]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
      {Array.from({ length: 10 }, (_, i) => (
        <g key={i}>
          <path d={`M${10 + i * 9} 10 Q${15 + i * 9} 30 ${10 + i * 9} 50 Q${5 + i * 9} 70 ${10 + i * 9} 90`} />
          <path d={`M10 ${10 + i * 9} Q30 ${15 + i * 9} 50 ${10 + i * 9} Q70 ${5 + i * 9} 90 ${10 + i * 9}`} />
        </g>
      ))}
    </svg>
  );
}
