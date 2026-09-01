"use client";

import { motion } from "motion/react";
import { missionVisionData } from "@/data/SiteSectionData";

export function MissionVision() {
  const { mission, vision } = missionVisionData;

  return (
    <> {/* Vision Section — light, text left, heading right */}
      <section className="bg-[#edf2fb] py-20 md:py-32 px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (Vision Text) */}
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-foreground/80 md:text-3xl lg:text-4xl"
            >
              {vision.text}
            </motion.p>
          </div>

          {/* Right Column (Heading + Badges) */}
          <div className="order-1 flex flex-col items-start justify-center lg:order-2 lg:col-span-4 lg:sticky lg:top-32 lg:h-fit lg:items-end lg:text-right">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-3xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              {vision.heading}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2.5 lg:justify-end"
            >
              {vision.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-foreground/70 transition-colors hover:bg-foreground/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Mission Section — dark, heading left, text right */}
      <section className="bg-[#0a1628] py-20 md:py-32 px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (Heading + Badges) */}
          <div className="order-1 flex flex-col items-start justify-center lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {mission.heading}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap gap-2.5"
            >
              {mission.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white/70 transition-colors hover:bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column (Mission Text) */}
          <div className="order-2 flex flex-col justify-end items-end lg:col-span-8 ">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl text-2xl font-medium leading-snug tracking-tight text-white/80 md:text-3xl lg:text-4xl"
            >
              {mission.text}
            </motion.p>
          </div>
        </div>
      </section>

     
    </>
  );
}
