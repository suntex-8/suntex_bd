"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { footerData } from "@/data/SiteSectionData";
import { navbarData } from "@/data/NavbarData";
import { SocialIcon } from "@/components/SocialIcon";
import { IconButton } from "@/components/ui/button";

const WORDMARK = "SUNTEX";
const WORDMARK_SIZE = "clamp(4.5rem, 24.5vw, 24rem)";

export function Footer() {
  const address =
    footerData.contact.find(
      (c) => c.label.toLowerCase() === "address"
    ) || footerData.contact[0];

  const email =
    footerData.contact.find(
      (c) => c.label.toLowerCase() === "email"
    ) || footerData.contact[1];

  const phone =
    footerData.contact.find(
      (c) => c.label.toLowerCase() === "phone"
    ) || footerData.contact[2];

  return (
    <footer className="relative overflow-hidden bg-ink pt-16 text-white lg:pt-24">
      {/* Background glow effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Brand Column (4 columns wide on desktop) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src={navbarData.logo}
                alt={navbarData.logoAlt}
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="font-display inline-flex items-center gap-2 text-xs font-semibold text-accent">
                <span className="h-px w-6 bg-accent" />
                Since 1999
              </span>
            </div>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/60">
              {footerData.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {footerData.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-ink focus-visible:outline-2 focus-visible:outline-accent motion-reduce:transition-none"
                >
                  <SocialIcon name={s.icon} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links & Contact Section (8 columns wide on desktop, 4 columns side-by-side in 1 line) */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:col-span-8 lg:grid-cols-4">
            {/* Link Columns (Company, Support, Services, etc.) */}
            {footerData.columns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-[10px] font-semibold tracking-[0.16em] text-white/45 uppercase">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 text-xs text-white/75 transition-colors duration-300 hover:text-white motion-reduce:transition-none"
                      >
                        <span
                          aria-hidden="true"
                          className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3 motion-reduce:transition-none"
                        />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Get in Touch Column */}
            <div>
              <h4 className="mb-4 text-[10px] font-semibold tracking-[0.16em] text-white/45 uppercase">
                Get in Touch
              </h4>

              <ul className="space-y-3">
                {address && (
                  <li>
                    <a
                      href={address.href}
                      className="group flex items-start gap-2.5 text-xs text-white/75 transition-colors hover:text-white"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent group-hover:bg-accent/10">
                        <MapPin className="h-3 w-3" />
                      </span>
                      <span className="min-w-0 leading-tight">{address.value}</span>
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <a
                      href={email.href}
                      className="group flex items-center gap-2.5 text-xs text-white/75 transition-colors hover:text-white"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent group-hover:bg-accent/10">
                        <Mail className="h-3 w-3" />
                      </span>
                      <span className="min-w-0 break-all">{email.value}</span>
                    </a>
                  </li>
                )}
                {phone && (
                  <li>
                    <a
                      href={phone.href}
                      className="group flex items-center gap-2.5 text-xs text-white/75 transition-colors hover:text-white"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent group-hover:bg-accent/10">
                        <Phone className="h-3 w-3" />
                      </span>
                      <span className="min-w-0 break-words">{phone.value}</span>
                    </a>
                  </li>
                )}
              </ul>

              {/* Newsletter Form */}
              <form onSubmit={(e) => e.preventDefault()} className="mt-4">
                <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 py-1 pr-1 pl-3.5 transition-colors focus-within:border-accent/60">
                  <input
                    type="email"
                    aria-label="Email address"
                    placeholder="Your Email"
                    required
                    className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-white/40"
                  />
                  <IconButton type="submit" label="Subscribe" className="h-7 w-7 shrink-0">
                    <Send className="h-3 w-3" />
                  </IconButton>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-white/45 md:flex-row md:text-left lg:mt-16">
          <p>{footerData.copyright}</p>
          <div className="flex gap-5">
            <Link href="/terms" className="transition-colors hover:text-accent">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Large Bottom Wordmark - Kept Exactly as Configured */}
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