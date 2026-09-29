"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Anchor,
  Building2,
  CheckCircle,
  Factory,
  Ship,
  type LucideIcon,
} from "lucide-react";
import { factoryNetworkData } from "@/data/SiteSectionData";

const BOUNDS = { minLon: 89.3, maxLon: 92.7, minLat: 21.9, maxLat: 24.9 };
const MAP_W = 560;
const MAP_H = 540;

function project(lon: number, lat: number) {
  return {
    x: ((lon - BOUNDS.minLon) / (BOUNDS.maxLon - BOUNDS.minLon)) * MAP_W,
    y: ((BOUNDS.maxLat - lat) / (BOUNDS.maxLat - BOUNDS.minLat)) * MAP_H,
  };
}

const BORDER: [number, number][] = [
  [88.2, 25.9],
  [88.6, 26.3],
  [88.9, 26.63],
  [89.3, 26.2],
  [89.55, 26.05],
  [89.8, 25.9],
  [89.85, 25.55],
  [89.95, 25.15],
  [90.1, 24.85],
  [90.2, 24.6],
  [90.45, 24.3],
  [90.65, 24.05],
  [90.85, 23.8],
  [91.05, 23.45],
  [91.2, 23.1],
  [91.4, 22.95],
  [91.7, 22.75],
  [91.95, 22.6],
  [92.2, 22.3],
  [92.45, 21.9],
  [92.3, 21.45],
  [92.05, 21.2],
  [91.75, 20.95],
  [91.35, 20.85],
  [90.9, 21.0],
  [90.5, 21.5],
  [90.2, 21.7],
  [89.8, 21.8],
  [89.4, 21.85],
  [89.1, 22.0],
  [88.9, 22.1],
  [88.6, 22.25],
  [88.35, 22.4],
  [88.05, 22.6],
  [88.15, 22.95],
  [88.25, 23.25],
  [88.35, 23.55],
  [88.45, 23.8],
  [88.3, 24.1],
  [88.25, 24.45],
  [88.45, 24.75],
  [88.35, 25.05],
  [88.15, 25.3],
  [88.05, 25.55],
  [88.1, 25.75],
];

const outlinePath = `${BORDER.map(([lon, lat], i) => {
  const p = project(lon, lat);
  return `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
}).join(" ")} Z`;

type Site = {
  name: string;
  lon: number;
  lat: number;
  icon: LucideIcon;
  labelX: number;
  labelY: number;
  align: "left" | "right";
  hub?: boolean;
};

const SITES: Site[] = [
  {
    name: "Gazipur",
    lon: 90.4203,
    lat: 23.9999,
    icon: Factory,
    labelX: -18,
    labelY: -14,
    align: "right",
  },
  {
    name: "Dhaka",
    lon: 90.4125,
    lat: 23.8103,
    icon: Building2,
    labelX: -20,
    labelY: 1,
    align: "right",
    hub: true,
  },
  {
    name: "Narayanganj",
    lon: 90.499,
    lat: 23.6238,
    icon: Anchor,
    labelX: -18,
    labelY: 16,
    align: "right",
  },
  {
    name: "Chattogram",
    lon: 91.7832,
    lat: 22.3569,
    icon: Ship,
    labelX: -18,
    labelY: 0,
    align: "right",
  },
];

const hub = project(90.4125, 23.8103);

const routes = SITES.filter((site) => !site.hub).map((site) => {
  const to = project(site.lon, site.lat);
  return {
    id: site.name,
    d: `M${hub.x.toFixed(1)} ${hub.y.toFixed(1)} L${to.x.toFixed(1)} ${to.y.toFixed(1)}`,
  };
});

export function FactoryNetwork() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="network" className="dark-gradient-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-20">
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

            <ul className="mt-9 border-t border-white/10">
              {factoryNetworkData.locations.map((loc, i) => {
                const site = SITES.find((s) => s.name === loc);
                const Icon = site?.icon;

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
                    className="flex items-center gap-4 border-b border-white/10 py-3.5"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                      {Icon ? (
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      )}
                    </span>
                    <span className="font-display text-lg font-semibold text-white">
                      {loc}
                    </span>
                    <span className="ml-auto hidden text-xs tracking-[0.18em] text-white/35 uppercase sm:block">
                      Bangladesh
                    </span>
                  </motion.li>
                );
              })}
            </ul>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
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
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
            className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
          >
            <svg
              viewBox={`0 0 ${MAP_W} ${MAP_H}`}
              className="fn-map-mask block h-auto w-full"
              role="img"
              aria-label="Map of Bangladesh marking the factory locations in Dhaka, Gazipur, Narayanganj and Chattogram"
            >
              <defs>
                <pattern
                  id="fn-dots"
                  width="11"
                  height="11"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.22)" />
                </pattern>
                <radialGradient id="fn-hub" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.32" />
                  <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.09" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
              </defs>

              <path
                d={outlinePath}
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
                strokeLinejoin="round"
              />
              <path d={outlinePath} fill="url(#fn-dots)" />

              <circle cx={hub.x} cy={hub.y} r="96" fill="url(#fn-hub)" />

              {routes.map((route) => (
                <path
                  key={route.id}
                  d={route.d}
                  fill="none"
                  stroke="var(--accent)"
                  strokeOpacity="0.45"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
              ))}
            </svg>

            {SITES.map((site) => {
              const p = project(site.lon, site.lat);
              const Icon = site.icon;

              return (
                <div
                  key={site.name}
                  aria-hidden="true"
                  className="pointer-events-none absolute"
                  style={{
                    left: `${(p.x / MAP_W) * 100}%`,
                    top: `${(p.y / MAP_H) * 100}%`,
                  }}
                >
                  <span
                    className={`absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border ${
                      site.hub
                        ? "h-5 w-5 border-accent bg-accent text-ink lg:h-6 lg:w-6"
                        : "h-5 w-5 border-accent/70 bg-ink text-accent lg:h-6 lg:w-6"
                    }`}
                  >
                    <Icon className="h-2.5 w-2.5 lg:h-3 lg:w-3" strokeWidth={2.4} />
                  </span>

                  <span
                    className={`absolute flex items-center gap-1.5 whitespace-nowrap text-[11px] font-semibold tracking-[0.06em] text-white/85 ${
                      site.align === "right" ? "flex-row-reverse" : "flex-row"
                    }`}
                    style={{
                      left: site.labelX,
                      top: site.labelY,
                      transform: "translateY(-50%)",
                    }}
                  >
                    {site.name}
                  </span>
                </div>
              );
            })}
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
