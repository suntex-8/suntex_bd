"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const suntexLogo = "/suntex logo front.png";

const navLinks: [string, string][] = [
  ["About", "about"],
  ["Services", "services"],
  ["Products", "products"],
  ["Process", "process"],
  ["Why SUNTEX", "advantage"],
  ["Team", "team"],
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#1b2130]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <button
          onClick={() => goTo("top")}
          className="relative z-10 w-[132px] sm:w-[158px]"
          aria-label="SUNTEX home"
        >
          <img src={suntexLogo} alt="SUNTEX Apparel Group" className="w-full" />
        </button>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map(([label, id]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="text-[11px] font-semibold uppercase tracking-[.16em] text-[#f2f0e7]/80 transition-colors hover:text-[#fff000]"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => goTo("contact")}
            className="border border-[#fff000] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[.16em] text-[#fff000] transition-colors hover:bg-[#fff000] hover:text-[#1b2130]"
          >
            Request a quote
          </button>
        </nav>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 items-center justify-center text-[#f2f0e7] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-0 -z-0 bg-[#1b2130] px-6 pb-8 pt-24 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {[...navLinks, ["Contact", "contact"]].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => goTo(id)}
                  className="border-b border-[#f2f0e7]/15 pb-4 text-left text-sm uppercase tracking-[.15em] text-[#f2f0e7]"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
