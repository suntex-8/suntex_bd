import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Send } from 'lucide-react';
import { footerData } from '@/data/SiteSectionData';
import { navbarData } from '@/data/NavbarData';
import { SocialIcon } from '@/components/SocialIcon';

export default function Footer() {
  return (
    <footer className="bg-ink-dark text-cream pb-8 pt-[80px]">
      <div className="w-[min(1180px,calc(100%-80px))] mx-auto">
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
            <p className="mb-4 max-w-sm text-[13px] leading-[1.7] text-cream/65">{footerData.description}</p>
            <p className="font-serif mb-6 text-lg text-gold">Since 1999</p>
            <div className="flex gap-3">
              {footerData.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-cream/80 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerData.columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 font-serif text-xl">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="flex items-center gap-2 text-[13px] text-cream/65 transition-colors hover:text-gold"
                    >
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
              <a
                href={footerData.contact[2].href}
                className="flex items-center gap-3 text-[13px] text-cream/70 transition-colors hover:text-gold"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink">
                  <Phone className="h-4 w-4" />
                </span>
                {footerData.contact[2].value}
              </a>
              <a
                href={footerData.contact[1].href}
                className="flex items-center gap-3 text-[13px] text-cream/70 transition-colors hover:text-gold"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-ink">
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
                  className="w-40 bg-transparent text-[13px] text-cream outline-none placeholder:text-cream/40"
                />
                <button
                  aria-label="Subscribe"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink transition-colors hover:bg-cream"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright + links */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center font-mono text-[10px] text-cream/50 md:flex-row md:text-left">
            <p>{footerData.copyright}</p>
            <div className="flex gap-4">
              <a href="#" className="transition-colors hover:text-gold">Terms &amp; Conditions</a>
              <a href="#" className="transition-colors hover:text-gold">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
