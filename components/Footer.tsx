"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";
import { footerData } from "@/data/SiteSectionData";
import { navbarData } from "@/data/NavbarData";
import { SocialIcon } from "@/components/SocialIcon";

export function Footer() {
  return (
    <footer className="dark-gradient-bg pb-8 pt-20 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src={navbarData.logo}
              alt={navbarData.logoAlt}
              width={160}
              height={48}
              className="mb-5 h-12 w-auto object-contain"
            />
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-white/60">
              {footerData.description}
            </p>
            <p className="mb-6 font-display text-lg font-bold text-accent">
              Since 1999
            </p>
            <div className="flex gap-3">
              {footerData.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-foreground"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerData.columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-xl">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent"
                    >
                      <span className="text-accent">+</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Phone + Email */}
            <div className="flex flex-wrap items-center gap-6">
              <a href={footerData.contact[2].href} className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-accent">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground">
                  <Phone className="h-4 w-4" />
                </span>
                {footerData.contact[2].value}
              </a>
              <a href={footerData.contact[1].href} className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-accent">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                {footerData.contact[1].value}
              </a>
            </div>

            {/* Newsletter */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-40 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                />
                <button
                  aria-label="Subscribe"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-foreground transition-colors hover:bg-white hover:text-foreground"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright + links */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-white/50 md:flex-row md:text-left">
            <p>{footerData.copyright}</p>
            <div className="flex gap-4">
              <a href="#" className="transition-colors hover:text-accent">Terms & Conditions</a>
              <a href="#" className="transition-colors hover:text-accent">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
