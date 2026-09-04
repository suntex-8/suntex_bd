"use client";

import { footerData } from "@/data/SiteSectionData";
import { navbarData } from "@/data/NavbarData";
import { Linkedin, Instagram } from "./Icons";

export function Footer() {
  const goTo = (id: string) => {
    const hash = id.replace("#", "");
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111621] px-5 pb-8 pt-16 text-[#f2f0e7] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 border-b border-[#f2f0e7]/15 pb-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <img
              src={navbarData.logo}
              alt={navbarData.logoAlt}
              className="w-[160px]"
            />
            <p className="mt-7 max-w-[280px] text-sm leading-6 text-[#a7abb1]">
              {footerData.description}
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center border border-[#f2f0e7]/20 transition-colors hover:border-[#fff000] hover:text-[#fff000]"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://www.instagram.com"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-[#f2f0e7]/20 transition-colors hover:border-[#fff000] hover:text-[#fff000]"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>
          {footerData.columns.map((col) => (
            <div key={col.title}>
              <div className="eyebrow text-[#fff000]">{col.title}</div>
              <div className="mt-6 space-y-4 text-sm text-[#a7abb1]">
                {col.links.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => goTo(link.href)}
                    className="block transition-colors hover:text-[#f2f0e7]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-4 pt-7 text-[10px] uppercase tracking-[.14em] text-[#777d86] sm:flex-row">
          <span>{footerData.copyright}</span>
          <span>Made for the makers.</span>
        </div>
      </div>
    </footer>
  );
}
