"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  Anchor,
  Building2,
  CheckCircle,
  Factory,
  Ship,
  type LucideIcon,
} from "lucide-react";
import { factoryNetworkData } from "@/data/SiteSectionData";

const MAP_W = 936;
const MAP_H = 1250;

/* Viewport into the source image: drops the far west and the north so the
   Dhaka → Chattogram corridor fills the frame. */
const CROP = { x: 300, y: 390, w: 636, h: 850 };

/* Linear lon/lat projection, fitted to public/dotted-bd-map.png so the
   markers land where the dots actually are. */
const PROJECT = { tx: 87.7821, ty: 26.80114, sx: 181.142, sy: 192.559 };

const project = (lon: number, lat: number) => ({
  x: (lon - PROJECT.tx) * PROJECT.sx,
  y: (PROJECT.ty - lat) * PROJECT.sy,
});

type Site = {
  name: string;
  lon: number;
  lat: number;
  icon: LucideIcon;
  role: string;
  side: "left" | "right";
  dx: number;
  dy: number;
  hub?: boolean;
};

const SITES: Site[] = [
  {
    name: "Gazipur",
    lon: 90.4203,
    lat: 23.9999,
    icon: Factory,
    role: "Factory cluster",
    side: "right",
    dx: 34,
    dy: -52,
  },
  {
    name: "Dhaka",
    lon: 90.4125,
    lat: 23.8103,
    icon: Building2,
    role: "Sourcing hub",
    side: "left",
    dx: -34,
    dy: -2,
    hub: true,
  },
  {
    name: "Narayanganj",
    lon: 90.499,
    lat: 23.6238,
    icon: Anchor,
    role: "River port",
    side: "right",
    dx: 34,
    dy: 54,
  },
  {
    name: "Chattogram",
    lon: 91.7832,
    lat: 22.3569,
    icon: Ship,
    role: "Seaport & export",
    side: "left",
    dx: -38,
    dy: 4,
  },
];

const HUB_POINT = project(90.4125, 23.8103);

const ROUTES = SITES.filter((site) => !site.hub).map((site) => {
  const to = project(site.lon, site.lat);
  const dx = to.x - HUB_POINT.x;
  const dy = to.y - HUB_POINT.y;
  const len = Math.hypot(dx, dy) || 1;
  const bend = len * 0.14;
  const cx = (HUB_POINT.x + to.x) / 2 + (-dy / len) * bend;
  const cy = (HUB_POINT.y + to.y) / 2 + (dx / len) * bend;
  return {
    id: site.name,
    d: `M${HUB_POINT.x.toFixed(1)} ${HUB_POINT.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`,
  };
});

/* The crop cuts through the dot field on the west and north edges — both
   edges dissolve into the section background instead of ending flat.
   These live on frame-sized wrappers so the fade is measured against the
   visible viewport, not the full map layer. */
const FADE_NORTH = "linear-gradient(to bottom, transparent 0%, #000 8%)";
const FADE_WEST = "linear-gradient(to right, transparent 0%, #000 10%)";

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function FactoryNetwork() {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  const overlayShow: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.14,
        delayChildren: prefersReducedMotion ? 0 : 0.4,
      },
    },
  };

  const routeVariant: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: prefersReducedMotion ? 0 : 1, ease: EASE },
    },
  };

  const markerVariant: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: prefersReducedMotion ? 0 : 0.5, ease: EASE },
    },
  };

  return (
    <section id="network" className="dark-gradient-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-white/70"
            >
              <span className="h-px w-8 bg-accent" />
              {factoryNetworkData.subTitle}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl text-[32px] leading-[1.08] text-white sm:text-4xl lg:text-[44px]"
            >
              {factoryNetworkData.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base"
            >
              {factoryNetworkData.paragraph}
            </motion.p>

            <ul
              className="mt-9 border-t border-white/10"
              onMouseLeave={() => setActive(null)}
            >
              {factoryNetworkData.locations.map((loc, i) => {
                const site = SITES.find((s) => s.name === loc);
                if (!site) return null;
                const Icon = site.icon;
                const isActive = active === loc;

                return (
                  <motion.li
                    key={loc}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 0.1 + i * 0.07,
                      duration: prefersReducedMotion ? 0 : 0.5,
                    }}
                    onMouseEnter={() => setActive(loc)}
                    className={`group border-b border-white/10 transition-colors motion-reduce:transition-none ${
                      isActive ? "bg-white/[0.03]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 py-4">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border transition-colors motion-reduce:transition-none ${
                          isActive || site.hub
                            ? "border-accent bg-accent text-ink"
                            : "border-accent/30 bg-accent/10 text-accent"
                        }`}
                      >
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </span>

                      <span className="min-w-0">
                        <span className="flex items-baseline gap-2.5">
                          <span className="font-display text-lg font-semibold text-white">
                            {loc}
                          </span>
                          {site.hub && (
                            <span className="text-[10px] font-semibold tracking-[0.18em] text-accent uppercase">
                              Hub
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block text-xs text-white/55">
                          {site.role}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className={`ml-auto h-px shrink-0 transition-all duration-500 motion-reduce:transition-none ${
                          isActive ? "w-10 bg-accent" : "w-4 bg-white/15"
                        }`}
                      />
                    </div>
                  </motion.li>
                );
              })}
            </ul>

            <ul className="mt-8 grid gap-x-6 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-3">
              {factoryNetworkData.advantages.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2.5 text-sm text-white/65"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
            className="mx-auto w-full max-w-[440px] lg:max-w-none"
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: `${CROP.w} / ${CROP.h}` }}
            >
              <div
                className="absolute h-[50%] w-[60%] rounded-full bg-accent/10 blur-[70px]"
                style={{
                  left: "55%",
                  top: "45%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  WebkitMaskImage: FADE_NORTH,
                  maskImage: FADE_NORTH,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    WebkitMaskImage: FADE_WEST,
                    maskImage: FADE_WEST,
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      width: `${(MAP_W / CROP.w) * 100}%`,
                      height: `${(MAP_H / CROP.h) * 100}%`,
                      left: `${-(CROP.x / CROP.w) * 100}%`,
                      top: `${-(CROP.y / CROP.h) * 100}%`,
                    }}
                  >
                    <Image
                      src="/dotted-bd-map-transparent.png"
                      alt="Dotted map of Bangladesh, zoomed onto the Dhaka–Chattogram corridor, marking Gazipur, Dhaka, Narayanganj and Chattogram"
                      width={MAP_W}
                      height={MAP_H}
                      sizes="(min-width: 1024px) 800px, (min-width: 640px) 680px, 140vw"
                      className="block h-full w-full"
                    />

                <motion.div
                  className="pointer-events-none absolute inset-0"
                  initial={prefersReducedMotion ? "show" : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={overlayShow}
                >
                  <svg
                    viewBox={`0 0 ${MAP_W} ${MAP_H}`}
                    className="absolute inset-0 h-full w-full"
                    fill="none"
                    aria-hidden="true"
                  >
                    {ROUTES.map((route) => (
                      <motion.path
                        key={route.id}
                        d={route.d}
                        stroke="var(--accent)"
                        strokeOpacity={0.5}
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        variants={routeVariant}
                      />
                    ))}

                    {SITES.map((site) => {
                      const p = project(site.lon, site.lat);
                      return (
                        <motion.line
                          key={`lead-${site.name}`}
                          x1={p.x}
                          y1={p.y}
                          x2={p.x + site.dx}
                          y2={p.y + site.dy}
                          stroke="var(--accent)"
                          strokeOpacity={0.55}
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          variants={markerVariant}
                        />
                      );
                    })}
                  </svg>

                  {SITES.map((site) => {
                    const p = project(site.lon, site.lat);
                    const Icon = site.icon;
                    const isActive = active === site.name;

                    return (
                      <motion.div
                        key={site.name}
                        aria-hidden="true"
                        className="absolute"
                        variants={markerVariant}
                        style={{
                          left: `${(p.x / MAP_W) * 100}%`,
                          top: `${(p.y / MAP_H) * 100}%`,
                        }}
                      >
                        {site.hub && !prefersReducedMotion && (
                          <span className="absolute top-1/2 left-1/2 grid h-8 w-8 sm:h-10 sm:w-10 -translate-x-1/2 -translate-y-1/2 place-items-center">
                            <motion.span
                              className="block h-full w-full rounded-full border border-accent/60"
                              initial={{ scale: 1, opacity: 0.7 }}
                              animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
                              transition={{
                                duration: 2.6,
                                ease: "easeOut",
                                repeat: Infinity,
                                repeatDelay: 0.8,
                              }}
                            />
                          </span>
                        )}

                        <span
                          className={`absolute top-1/2 left-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border backdrop-blur-[2px] transition-all duration-300 motion-reduce:transition-none ${
                            site.hub
                              ? "h-5 w-5 border border-accent bg-ink/90 text-accent sm:h-7 sm:w-7 sm:border-2"
                              : "h-3 w-3 border border-accent/60 bg-ink/85 text-accent sm:h-[22px] sm:w-[22px] sm:border-[1.5px]"
                          } ${isActive ? "scale-110 ring-4 ring-accent/25" : ""}`}
                        >
                          <Icon
                            className={`${site.hub ? "h-3 w-3 sm:h-4 sm:w-4" : "hidden h-3 w-3 sm:block"}`}
                            strokeWidth={2}
                          />
                        </span>
                      </motion.div>
                    );
                  })}

                  {SITES.map((site) => {
                    const p = project(site.lon, site.lat);
                    const isActive = active === site.name;
                    const show = site.hub || isActive;
                    const ax = ((p.x + site.dx) / MAP_W) * 100;
                    const ay = ((p.y + site.dy) / MAP_H) * 100;

                    const pos =
                      site.side === "right"
                        ? { left: `${ax}%` }
                        : { right: `${100 - ax}%` };

                    return (
                      <div
                        key={`label-${site.name}`}
                        aria-hidden="true"
                        className={`absolute -translate-y-1/2 ${show ? "block" : "hidden sm:block"}`}
                        style={{ ...pos, top: `${ay}%` }}
                      >
                        <span
                          className={`block whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase backdrop-blur-sm transition-colors motion-reduce:transition-none ${
                            site.side === "right" ? "ml-1.5" : "mr-1.5"
                          } ${
                            isActive || site.hub
                              ? "border-accent/50 bg-ink/85 text-accent"
                              : "border-white/10 bg-ink/70 text-white/75"
                          }`}
                        >
                          {site.name}
                        </span>
                      </div>
                    );
                  })}
                  </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
              <p className="text-[11px] leading-relaxed text-white/45">
                Routes run from the Dhaka hub to every location in the network.
              </p>
              <ul className="flex items-center gap-4 text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase">
                <li className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Hub
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full border border-accent/70" />
                  Location
                </li>
              </ul>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
