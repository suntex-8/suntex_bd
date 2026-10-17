"use client";

import { useEffect, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";

const DEMO_WHATSAPP = "15551234567";
const DEMO_EMAIL = "hello@suntexbd.com";

export function FloatingContactBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");

    if (!hero) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      hidden={!isVisible}
      className="fixed right-4 bottom-4 z-[100] flex items-center gap-1.5 rounded-full border border-white/15 bg-ink/95 p-1.5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md sm:right-6 sm:bottom-6"
      aria-label="Contact SUNTEX"
    >
      <a
        href={`https://wa.me/${DEMO_WHATSAPP}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`WhatsApp ${DEMO_WHATSAPP}`}
        className="group flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-[#25D366] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <MessageCircle className="h-4 w-4 text-[#25D366] transition-colors group-hover:text-white" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <span aria-hidden="true" className="h-4 w-px bg-white/20" />
      <a
        href={`mailto:${DEMO_EMAIL}`}
        aria-label={`Email ${DEMO_EMAIL}`}
        className="group flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Mail className="h-4 w-4 text-accent transition-colors group-hover:text-ink" />
        <span className="hidden sm:inline">Email</span>
      </a>
    </div>
  );
}
