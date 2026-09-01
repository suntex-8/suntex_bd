"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { processData } from "@/data/SiteSectionData";

export function Process() {
  return (
    <section id="process" className="bg-[#edf2fb] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — cloth illustration */}
          <div className="relative hidden h-[400px] lg:block lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex h-full items-center justify-center"
            >
              {/* //increse the  height and width */}
              <img
                src="/cltsvg3.png"
                // height={600}
                // width={900}
                alt="Fabric illustration"
                className=" "
              />
            </motion.div>
          </div>

          {/* Right — process steps */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-block rounded-full border border-foreground/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground"
            >
              The process
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-[36px] leading-tight font-normal text-foreground sm:text-5xl lg:text-[56px]"
            >
              How it works
            </motion.h2>

            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-px bg-foreground/10" />

              <div className="space-y-8">
                {processData.steps.map((step, i) => (
                  <motion.div
                    key={step.order}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative flex gap-5"
                  >
                    {/* Dot */}
                    <div className="relative z-10 mt-1.5 flex h-[15px] w-[15px] shrink-0 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#047bae] opacity-30" />
                      <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-[#097daf]" />
                    </div>

                    <div>
                      <span className="mb-1 block text-lg font-semibold text-foreground/40 sm:text-xl">
                        {step.order}
                      </span>
                      <div className="text-lg font-light text-foreground sm:text-xl ">
                        {step.title}
                      </div>
                      {i === 0 && (
                        <a
                          href="#"
                          className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-foreground underline underline-offset-4 hover:text-accent"
                        >
                          Start now
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
