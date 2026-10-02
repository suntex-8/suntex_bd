"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navbarData } from "@/data/NavbarData";

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* First visit gets the full brand beat; later route changes get a
   quick confirmation so navigation never feels padded. */
const FIRST_LOAD = 1600;
const ROUTE_LOAD = 620;

/* NOTE: the logo is a white wordmark with a yellow mark on a
   transparent background, so this overlay must stay dark. It used to
   sit on white, which left the wordmark invisible. */
export function Loader() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const firstRun = useRef(true);

  useEffect(() => {
    const duration = firstRun.current ? FIRST_LOAD : ROUTE_LOAD;
    firstRun.current = false;

    if (prefersReducedMotion) {
      const done = setTimeout(() => setVisible(false), 140);
      return () => clearTimeout(done);
    }

    const done = setTimeout(() => setVisible(false), duration);
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
            /* Opaque on the very first frame. Fading the overlay IN let
               the page — navbar included — show through for the whole
               fade, which read as the nav leaking over the loader. */
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-ink"
            aria-hidden="true"
          >
            {/* A breath of brand yellow behind the mark. */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-accent/12 blur-[130px]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative z-10 flex flex-col items-center px-6"
            >
              <Image
                src={navbarData.logo}
                alt=""
                width={1082}
                height={241}
                className="h-10 w-auto object-contain sm:h-14"
                preload
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
