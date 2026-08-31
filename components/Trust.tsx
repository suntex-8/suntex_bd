"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check } from "lucide-react";
import { trustData } from "@/data/SiteSectionData";
import { SectionHeader } from "./SectionHeader";

export function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax values
  const demoY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const bigImageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const smallImageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} id="trust" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Parallax demo background image */}
      <motion.div
        style={{ y: demoY }}
        className="pointer-events-none absolute -top-1/3 right-0 h-[120%] w-full opacity-10"
        aria-hidden
      >
        <Image
          src={trustData.demoImage}
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-stretch gap-12 lg:grid-cols-12">
          {/* Left visual column — full height image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative h-full min-h-[520px] lg:min-h-[560px]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <motion.div style={{ y: bigImageY }} className="absolute -inset-x-0 -inset-y-[40px]">
                  <Image
                    src={trustData.image1}
                    alt="Global brands trust Suntex"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-8 right-0 z-10 rounded-xl bg-accent p-6 shadow-2xl">
                <p className="font-display text-5xl text-foreground">
                  {trustData.stats[0].value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">
                  {trustData.stats[0].label}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right content */}
          <div id="trust-metrics" className="flex flex-col justify-center lg:col-span-7">
            <SectionHeader data={trustData} />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mb-8 max-w-2xl text-base leading-relaxed text-foreground/70"
            >
              {trustData.paragraph}
            </motion.p>

            {/* Small parallax image on the left of the metrics */}
            <div className="grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-64 overflow-hidden rounded-xl lg:h-full lg:min-h-[280px]"
                >
                  <motion.div
                    style={{ y: smallImageY }}
                    className="absolute -inset-x-0 -inset-y-[40px]"
                  >
                    <Image
                      src={trustData.image2}
                      alt="Sustainable Suntex stewardship"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>

              <div className="lg:col-span-3">
                {/* Skill bars */}
                <div className="mb-10 space-y-6">
                  {trustData.bars.map((bar, i) => (
                    <Bar key={bar.label} label={bar.label} value={bar.value} delay={i * 0.15} />
                  ))}
                </div>

                {/* Check list */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {trustData.checkList.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/30">
                        <Check className="h-4 w-4 text-accent" />
                      </span>
                      <span className="text-sm font-medium text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bar({
  label,
  value,
  delay,
}: {
  label: string;
  value: number;
  delay: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-bold text-foreground">{label}</span>
        <span className="text-sm font-bold text-accent">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden bg-[#f0f0ec]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          className="h-full bg-accent"
        />
      </div>
    </div>
  );
}
