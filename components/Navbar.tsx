"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { navbarData } from "@/data/NavbarData";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mt-3 flex h-14 items-center justify-between rounded-full border px-6 transition-all duration-500 ${
            scrolled
              ? "border-white/10 navbar-glass-scrolled"
              : "border-white/10 navbar-glass"
          }`}
        >
        {/* Logo — always use actual logo */}
        <Link href="#home" className="flex shrink-0 items-center">
          <Image
            src={navbarData.logo}
            alt={navbarData.logoAlt}
            width={120}
            height={32}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navbarData.menu.map((item, i) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children?.length && setOpenMenu(i)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:text-accent"
              >
                {item.label}
                {item.children?.length ? (
                  <ChevronDown className="h-3 w-3" />
                ) : null}
              </Link>
              <AnimatePresence>
                {item.children?.length && openMenu === i ? (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full w-52 rounded-lg bg-white p-2 shadow-xl ring-1 ring-black/5"
                  >
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          href={c.href}
                          className="block rounded px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent/20 hover:text-accent"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {navbarData.showSearch && (
            <button
              aria-label="Search"
              className="hidden items-center justify-center p-2 text-white transition-colors hover:text-accent sm:flex"
            >
              <Search className="h-4 w-4" />
            </button>
          )}
          <Link
            href={navbarData.cta.href}
            className="btn-brand hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold md:flex"
          >
            <span className="relative z-10 inline-flex items-center gap-2">{navbarData.cta.label}</span>
          </Link>
          {/* Hamburger (mobile) */}
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center p-2 text-white lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      </div>

      {/* Mobile drawer — full width, all items */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl sm:w-80"
            >
              <div className="mb-4 flex items-center justify-between px-5 pt-5">
                <Image
                  src={navbarData.logo}
                  alt={navbarData.logoAlt}
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="p-1 text-foreground hover:text-accent"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              {/* All nav items — scrollable list */}
              <nav className="flex-1 overflow-y-auto px-5 pb-4">
                {navbarData.menu.map((item, i) => (
                  <div key={item.label} className="border-b border-black/5">
                    <button
                      onClick={() => {
                        if (item.children?.length) {
                          setOpenMenu(openMenu === i ? null : i);
                        } else {
                          setMobileOpen(false);
                        }
                      }}
                      className="flex w-full items-center justify-between py-3.5 text-left text-[15px] font-bold text-foreground hover:text-accent"
                    >
                      <Link href={item.href} onClick={() => !item.children?.length && setMobileOpen(false)}>
                        {item.label}
                      </Link>
                      {item.children?.length ? (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openMenu === i ? "rotate-180" : ""
                          }`}
                        />
                      ) : null}
                    </button>
                    <AnimatePresence>
                      {openMenu === i && item.children?.length ? (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          {item.children.map((c) => (
                            <li key={c.label}>
                              <Link
                                href={c.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm text-foreground/70 hover:text-accent"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
              <div className="border-t border-black/5 px-5 py-4">
                <Link
                  href={navbarData.cta.href}
                  onClick={() => setMobileOpen(false)}
                  className="btn-brand block w-full rounded-full px-6 py-3 text-center text-sm font-bold"
                >
                  <span className="relative z-10">{navbarData.cta.label}</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
