"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Play } from "lucide-react";
import { trustData } from "@/data/SiteSectionData";

export function TrustVideo() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax on the background video poster
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 lg:py-40">
      {/* Full-width parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-x-0 -top-[15%] h-[130%]">
        <Image
          src={trustData.video.poster}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center justify-center px-5 text-center"
      >
        <a
          href={trustData.video.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={trustData.video.playLabel}
          className="group mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-accent text-foreground shadow-2xl transition-transform hover:scale-110 lg:h-24 lg:w-24"
        >
          <Play className="ml-1 h-8 w-8 lg:h-10 lg:w-10" fill="currentColor" />
        </a>
        <h3 className="text-white">{trustData.video.playLabel}</h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
          Watch how we combine heritage craft with modern technical Suntex manufacturing.
        </p>
      </motion.div>
    </section>
  );
}
