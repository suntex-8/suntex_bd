"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";
import { footerData } from "@/data/SiteSectionData";
import { navbarData } from "@/data/NavbarData";
import { SocialIcon } from "@/components/SocialIcon";
import { IconButton } from "@/components/ui/button";

/* Closing wordmark. Change this to your brand name. Font size is fluid
   (vw-based), so a longer name needs a smaller number in WORDMARK_SIZE. */
const WORDMARK = "SUNTEX";
const WORDMARK_SIZE = "clamp(4.5rem, 24.5vw, 24rem)";

export function Footer() {
  const phone = footerData.contact[2];
  const email = footerData.contact[1];

  return (
    <footer className="relative overflow-hidden bg-ink pt-16 text-white lg:pt-24">
      {/* Soft accent glow behind the top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src={navbarData.logo}
              alt={navbarData.logoAlt}
              width={160}
              height={48}
              className="mb-6 h-12 w-auto object-contain"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              {footerData.description}
            </p>

            <p className="font-display mt-6 inline-flex items-center gap-3 text-sm font-semibold text-accent">
              <span className="h-px w-8 bg-accent" />
              Since 1999
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {footerData.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-ink motion-reduce:transition-none"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-4 lg:col-start-5 lg:grid-cols-2">
            {footerData.columns.map((col, i) => (
              <div key={col.title}>
                <h4 className="mb-5 flex items-baseline gap-2.5 text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase">
                  <span className="text-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-2 text-[15px] text-white/75 transition-colors duration-300 hover:text-white motion-reduce:transition-none"
                      >
                        <span
                          aria-hidden="true"
                          className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4 motion-reduce:transition-none"
                        />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact + newsletter */}
          <div className="lg:col-span-4 lg:col-start-9">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              <li>
                <a
                  href={phone.href}
                  className="group flex items-center gap-4 py-4 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 break-words">{phone.value}</span>
                </a>
              </li>
              <li>
                <a
                  href={email.href}
                  className="group flex items-center gap-4 py-4 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 break-all">{email.value}</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pr-1.5 pl-5 transition-colors focus-within:border-accent/60">
              <input
                type="email"
                aria-label="Email address"
                placeholder="Your Email"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />
              <IconButton label="Subscribe" className="h-9 w-9 shrink-0">
                <Send className="h-3.5 w-3.5" />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-white/45 md:flex-row md:text-left lg:mt-20">
          <p>{footerData.copyright}</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-accent">
              Terms &amp; Conditions
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Typographic closer: oversized wordmark, fading out toward the
          bottom edge and slightly cropped by it. */}
      <div
        aria-hidden="true"
        className="relative mt-8 select-none overflow-hidden px-2 lg:mt-10"
      >
        <p
          className="font-display bg-linear-to-b from-white/35 via-white/10 to-transparent bg-clip-text text-center leading-[0.78] font-bold tracking-[-0.04em] whitespace-nowrap text-transparent uppercase"
          style={{ fontSize: WORDMARK_SIZE, marginBottom: "-0.1em" }}
        >
          {WORDMARK}
        </p>
      </div>
    </footer>
  );
}