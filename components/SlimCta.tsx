"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { slimCtaData } from "@/data/SiteSectionData";

/* A full-bleed accent strip: one line, one action, no section weight.
   The brand plate sits underneath in multiply so it reads as texture in
   the yellow, and the gradient veil is heaviest behind the headline —
   ink text keeps its contrast exactly where the reading happens. */
export function SlimCta() {
  return (
    <section
      className="relative isolate overflow-hidden bg-accent text-foreground"
      aria-labelledby="slim-cta-title"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/suntex-bg-1.webp"
          alt=""
          fill
          sizes="10vw"
          priority={false}
          className="object-cover object-center"
          style={{ mixBlendMode: "multiply", opacity: 0.45 }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-accent/95 via-accent/80 to-accent/55" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:px-8">
        <h3 id="slim-cta-title" className="text-lg font-semibold sm:text-xl">
          {slimCtaData.headline}
        </h3>

        <Link
          href={slimCtaData.cta.href}
          className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-foreground sm:self-auto"
        >
          {slimCtaData.cta.label}
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}