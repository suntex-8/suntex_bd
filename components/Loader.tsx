"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navbarData } from "@/data/NavbarData";

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* Every load, first visit or route change, holds for 1.2s. */
const LOAD_MS = 1200;

export function Loader() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const done = setTimeout(
      () => setVisible(false),
      prefersReducedMotion ? 140 : LOAD_MS,
    );
    return () => clearTimeout(done);
  }, [pathname, prefersReducedMotion]);

  return (
    <>
      <span role="status" aria-live="polite" className="sr-only">
        Loading SUNTEX Apparel Group
      </span>

      <AnimatePresence>
        {visible && (
          <motion.div
            key="loader"
            /* Opaque on the first frame so the page never shows through. */
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-ink"
            aria-hidden="true"
          >
            <div className="relative z-10 flex items-center justify-center gap-5 px-6 sm:gap-8">
              {/* Emblem enters from the left and exits away from the divider. */}
              <motion.div
                initial={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, transform: "translateX(-18px) scale(0.88) rotate(-35deg)" }
                }
                animate={{ opacity: 1, transform: "translateX(0) scale(1) rotate(0deg)" }}
                exit={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 0, transform: "translateX(-90px) scale(0.96)" }
                }
                transition={{ duration: 0.8, ease: EASE }}
                className="relative h-24 w-24 sm:h-32 sm:w-32"
              >
                <Image
                  src="/3d_logo.png"
                  alt=""
                  fill
                  priority
                  sizes="144px"
                  className="object-contain drop-shadow-[0_18px_36px_rgba(247,197,39,0.18)]"
                />
              </motion.div>

              <span
                aria-hidden="true"
                className="h-16 w-px bg-white/25 sm:h-20"
              />

              {/* Wordmark enters from the right and exits away from the divider. */}
              <motion.div
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, transform: "translateX(18px)" }
                }
                animate={{ opacity: 0.85, transform: "translateX(0)" }}
                exit={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 0, transform: "translateX(90px)" }
                }
                transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
                className="w-[120px] sm:w-[160px]"
              >
                <Image
                  src={navbarData.logo}
                  alt=""
                  width={1082}
                  height={241}
                  className="h-auto w-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}