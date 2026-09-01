"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative h-[340px] w-full overflow-hidden dark-gradient-bg lg:h-[400px]">
      {/* Background image */}
      <Image
        src="https://images.pexels.com/photos/6044196/pexels-photo-6044196.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Suntex services workshop"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content — centered */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl text-white sm:text-6xl lg:text-7xl"
        >
          Services
        </motion.h1>
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 flex items-center gap-2 text-sm text-white/70"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <ArrowRight className="h-3.5 w-3.5" />
          <span className="text-white">Services</span>
        </motion.nav>
      </div>
    </section>
  );
}
