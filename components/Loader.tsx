"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navbarData } from "@/data/NavbarData";

export function Loader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const mountedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (mountedRef.current && timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setVisible(false);
      mountedRef.current = true;
    }, 1000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-foreground/60 backdrop-blur-xl"
        >
          <Image
            src={navbarData.logo}
            alt={navbarData.logoAlt}
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
