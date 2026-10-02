"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { ChevronDown, Menu, MessageSquare, Search, X } from "lucide-react";
import { navbarData } from "@/data/NavbarData";

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* Don't start hiding until the hero is behind us — the nav is part of
   the hero composition, so it stays put for the first screen. */
const HIDE_AFTER = 240;

/* Ignore scroll noise below this delta, or a trackpad twitch flips the
   nav on and off. */
const MIN_DELTA = 8;

export function Navbar() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const lastY = useRef(0);
  const lastDir = useRef(1);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 60);

    /* Never hide while the drawer is open, or it would vanish out from
       under the user's finger. */
    if (mobileOpen) return;

    if (v < HIDE_AFTER) {
      lastY.current = v;
      lastDir.current = 1;
      setHidden(false);
      return;
    }

    const delta = v - lastY.current;
    lastY.current = v;

    if (Math.abs(delta) < MIN_DELTA) return;

    /* Scroll locks at the very bottom, which would otherwise read as a
       downward flick and hide the nav exactly when the user looks for it. */
    const atBottom =
      window.innerHeight + v > document.documentElement.scrollHeight - 2;

    if (atBottom) {
      lastDir.current = -1;
      setHidden(false);
      return;
    }

    const dir = delta > 0 ? 1 : -1;
    if (dir !== lastDir.current) {
      lastDir.current = dir;
      setHidden(dir > 0);
    }
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? "-130%" : 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.38, ease: EASE }
      }
      className={`fixed inset-x-0 top-0 z-50 ${
        hidden ? "pointer-events-none" : ""
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div
          className={`mt-4 flex h-12 items-center justify-between rounded-xl border px-5 transition-all duration-500 sm:h-[60px] sm:px-7 ${
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
            width={140}
            height={36}
            className="h-7 w-auto object-contain sm:h-8"
            preload
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-4 lg:flex">
          {navbarData.menu.map((item, i) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children?.length && setOpenMenu(i)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:bg-white/10 hover:text-accent"
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
                          className="block rounded-lg px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent/20 hover:text-accent"
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
              <Search className="h-5 w-5" />
            </button>
          )}
         <Link
  href={navbarData.cta.href}
  className="btn-brand hidden lg:flex items-center gap-2 rounded-xl px-7 py-2 text-sm font-semibold"
>
  <span className="relative z-10 inline-flex items-center gap-2">
    {navbarData.cta.label}
  </span>
</Link>

          {/* Contact on mobile — the labelled button needs ~180px, which the
              pill has no room for below md. An icon keeps the conversion
         
          {/* Hamburger (mobile) */}
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="-mr-1.5 flex shrink-0 items-center justify-center p-2 text-white transition-colors hover:text-accent lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
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
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(22rem,calc(100vw-1rem))] max-w-full flex-col bg-ink text-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <Image
                  src={navbarData.logo}
                  alt={navbarData.logoAlt}
                  width={140}
                  height={36}
                  className="h-7 w-auto object-contain"
                />
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="-mr-2.5 p-2.5 text-white/80 transition-colors hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              {/* All nav items — scrollable list */}
              <nav className="flex-1 overflow-y-auto overscroll-contain px-5 pt-1 pb-6">
                {navbarData.menu.map((item, i) => (
                  <div key={item.label} className="border-b border-white/10 last:border-b-0">
                    <div className="flex w-full items-center justify-between text-left text-[15px] font-medium text-white/90">
                      <Link
                        href={item.href}
                        onClick={() => !item.children?.length && setMobileOpen(false)}
                        className="flex-1 rounded-lg px-2 py-3 transition-colors hover:bg-white/5 hover:text-accent"
                      >
                        {item.label}
                      </Link>
                      {item.children?.length ? (
                        <button
                          type="button"
                          aria-expanded={openMenu === i}
                          aria-label={`${item.label} submenu`}
                          onClick={() => setOpenMenu(openMenu === i ? null : i)}
                          className="ml-1 rounded-lg p-3.5 text-white/80 transition-colors hover:text-accent"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              openMenu === i ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      ) : null}
                    </div>
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
                                className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-accent"
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
            </motion.div>
          </>
        )}
</AnimatePresence>
    </motion.header>
  );
}
