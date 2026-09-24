"use client";

import { motion } from "motion/react";
import {
  ProgressSlider,
  SliderBtn,
  SliderBtnGroup,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progressive-carousel";
import { PenTool, Scissors, ShieldCheck, Truck } from "lucide-react";

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
    <section id="services" className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Label + heading */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted"
        >
          <span className="h-px w-8 bg-accent" />
          What We Do
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl text-[32px] leading-[1.05] font-semibold text-foreground sm:text-4xl lg:text-[40px]"
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
            className="relative border-t border-line pt-6"
          >
            <div className="mb-6 text-sm font-semibold text-muted">
              We make
            </div>

            <div className="space-y-2">
              {inHouseItems.map((item) => (
                <p
                  key={item}
                  className="text-[clamp(1.4rem,3vw,2.4rem)] leading-[1.08] tracking-[-0.02em] font-semibold text-foreground"
                >
                  {item}
                </p>
              ))}
            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              {inHouseNote}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative border-t border-line pt-6 md:border-l md:border-line md:pl-8"
          >
            <div className="mb-6 text-sm font-semibold text-muted">
              We source
            </div>

            <div className="space-y-2">
              {partnerItems.map((item) => (
                <p
                  key={item}
                  className="text-[clamp(1.4rem,3vw,2.4rem)] leading-[1.08] tracking-[-0.02em] font-semibold text-foreground"
                >
                  {item}
                </p>
              ))}
            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              {partnerNote}
            </p>
          </motion.div>
        </div>
      </div>

      {/* End-to-End Service Capability — full-width progressive carousel */}
      <div className="relative z-10 mt-20 w-full border-t border-line">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 pt-16 text-[28px] leading-tight font-semibold text-foreground sm:text-3xl lg:text-[36px]"
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
                  <div className="absolute inset-0 bg-ink/45" />
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

          <SliderBtnGroup className="relative z-20 grid w-full grid-cols-2 border-t border-line bg-background md:grid-cols-4">
            {capabilities.map((cap) => (
              <SliderBtn
                key={cap.title}
                value={cap.title}
                className="border-r border-line p-4 text-left last:border-r-0"
                progressBarClass="bg-accent/25 h-full"
              >
                <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/5 text-foreground">
                  <cap.icon className="h-4 w-4" />
                </span>
                <p className="text-sm font-semibold text-foreground">
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