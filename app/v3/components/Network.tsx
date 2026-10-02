'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Anchor,
  Building2,
  CheckCircle,
  Factory,
  Ship,
  type LucideIcon,
} from 'lucide-react';
import { factoryNetworkData } from '@/data/SiteSectionData';

const MAP_W = 936;
const MAP_H = 1250;

/* Viewport into the source image: drops the far west and the north so the
   Dhaka -> Chattogram corridor fills the frame. */
const CROP = { x: 300, y: 390, w: 636, h: 850 };

/* Linear lon/lat projection, fitted to public/dotted-bd-map-transparent.png so
   the markers land where the dots actually are. */
const PROJECT = { tx: 87.7821, ty: 26.80114, sx: 181.142, sy: 192.559 };

const ACCENT = '#eac20e';

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
  side: 'left' | 'right';
  dx: number;
  dy: number;
  hub?: boolean;
};

const SITES: Site[] = [
  { name: 'Gazipur', lon: 90.4203, lat: 23.9999, icon: Factory, role: 'Factory cluster', side: 'right', dx: 34, dy: -52 },
  { name: 'Dhaka', lon: 90.4125, lat: 23.8103, icon: Building2, role: 'Sourcing hub', side: 'left', dx: -34, dy: -2, hub: true },
  { name: 'Narayanganj', lon: 90.499, lat: 23.6238, icon: Anchor, role: 'River port', side: 'right', dx: 34, dy: 54 },
  { name: 'Chattogram', lon: 91.7832, lat: 22.3569, icon: Ship, role: 'Seaport & export', side: 'left', dx: -38, dy: 4 },
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

/* The crop cuts through the dot field on the west and north edges - both
   edges dissolve into the section background instead of ending flat. */
const FADE_NORTH = 'linear-gradient(to bottom, transparent 0%, #000 8%)';
const FADE_WEST = 'linear-gradient(to right, transparent 0%, #000 10%)';

export default function Network() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="network" className="bg-ink-dark text-cream py-[120px]">
      <div className="w-[min(1180px,calc(100%-80px))] mx-auto grid items-center gap-[60px] lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-[70px]">
        <div>
          <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold">{factoryNetworkData.subTitle}</div>

          <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] my-[18px] max-w-[560px]">
            A Deep, Reliable<br /><em className="font-serif font-medium">Factory Network.</em>
          </h2>

          <p className="max-w-[520px] text-sm leading-[1.7] text-white/65">
            {factoryNetworkData.paragraph}
          </p>

          <ul className="mt-9 border-t border-white/10" onMouseLeave={() => setActive(null)}>
            {factoryNetworkData.locations.map((loc) => {
              const site = SITES.find((s) => s.name === loc);
              if (!site) return null;
              const Icon = site.icon;
              const isActive = active === loc;

              return (
                <li
                  key={loc}
                  onMouseEnter={() => setActive(loc)}
                  className={`border-b border-white/10 transition-colors ${isActive ? 'bg-white/[0.03]' : ''}`}
                >
                  <div className="flex items-center gap-4 py-4">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border transition-colors ${
                        isActive || site.hub
                          ? 'border-gold bg-gold text-ink'
                          : 'border-gold/30 bg-gold/10 text-gold'
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>

                    <span className="min-w-0">
                      <span className="flex items-baseline gap-2.5">
                        <span className="text-lg font-medium text-cream">{loc}</span>
                        {site.hub && (
                          <span className="text-[10px] font-semibold tracking-[0.18em] text-gold uppercase">Hub</span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-xs text-white/55">{site.role}</span>
                    </span>

                    <span
                      aria-hidden="true"
                      className={`ml-auto h-px shrink-0 transition-all duration-500 ${isActive ? 'w-10 bg-gold' : 'w-4 bg-white/15'}`}
                    />
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className="mt-8 grid gap-x-6 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            {factoryNetworkData.advantages.map((a) => (
              <li key={a} className="flex items-start gap-2.5 text-sm text-white/65">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <figure className="mx-auto w-full max-w-[440px] lg:max-w-none">
          <div className="relative overflow-hidden" style={{ aspectRatio: `${CROP.w} / ${CROP.h}` }}>
            <div
              className="absolute h-[50%] w-[60%] rounded-full bg-gold/10 blur-[70px]"
              style={{ left: '55%', top: '45%', transform: 'translate(-50%, -50%)' }}
            />

            <div className="absolute inset-0" style={{ WebkitMaskImage: FADE_NORTH, maskImage: FADE_NORTH }}>
              <div className="absolute inset-0" style={{ WebkitMaskImage: FADE_WEST, maskImage: FADE_WEST }}>
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
                    alt="Dotted map of Bangladesh, zoomed onto the Dhaka-Chattogram corridor, marking Gazipur, Dhaka, Narayanganj and Chattogram"
                    width={MAP_W}
                    height={MAP_H}
                    sizes="(min-width: 1024px) 800px, (min-width: 640px) 680px, 140vw"
                    className="block h-full w-full object-contain"
                  />

                  <div className="pointer-events-none absolute inset-0">
                    <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
                      {ROUTES.map((route) => (
                        <path key={route.id} d={route.d} stroke={ACCENT} strokeOpacity={0.5} strokeWidth={1.5} strokeLinecap="round" />
                      ))}

                      {SITES.map((site) => {
                        const p = project(site.lon, site.lat);
                        return (
                          <line
                            key={`lead-${site.name}`}
                            x1={p.x}
                            y1={p.y}
                            x2={p.x + site.dx}
                            y2={p.y + site.dy}
                            stroke={ACCENT}
                            strokeOpacity={0.55}
                            strokeWidth={1.5}
                            strokeLinecap="round"
                          />
                        );
                      })}
                    </svg>

                    {SITES.map((site) => {
                      const p = project(site.lon, site.lat);
                      const Icon = site.icon;
                      const isActive = active === site.name;

                      return (
                        <div
                          key={site.name}
                          aria-hidden="true"
                          className="absolute"
                          style={{ left: `${(p.x / MAP_W) * 100}%`, top: `${(p.y / MAP_H) * 100}%` }}
                        >
                          {site.hub && (
                            <span className="absolute top-1/2 left-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center sm:h-10 sm:w-10">
                              <span className="block h-full w-full animate-ping rounded-full border border-gold/60 motion-reduce:animate-none" />
                            </span>
                          )}

                          <span
                            className={`absolute top-1/2 left-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border backdrop-blur-[2px] transition-all duration-300 ${
                              site.hub
                                ? 'h-5 w-5 border-gold bg-ink-dark/90 text-gold sm:h-7 sm:w-7 sm:border-2'
                                : 'h-3 w-3 border-gold/60 bg-ink-dark/85 text-gold sm:h-[22px] sm:w-[22px] sm:border-[1.5px]'
                            } ${isActive ? 'scale-110 ring-4 ring-gold/25' : ''}`}
                          >
                            <Icon className={site.hub ? 'h-3 w-3 sm:h-4 sm:w-4' : 'hidden h-3 w-3 sm:block'} strokeWidth={2} />
                          </span>
                        </div>
                      );
                    })}

                    {SITES.map((site) => {
                      const p = project(site.lon, site.lat);
                      const isActive = active === site.name;
                      const show = site.hub || isActive;
                      const ax = ((p.x + site.dx) / MAP_W) * 100;
                      const ay = ((p.y + site.dy) / MAP_H) * 100;
                      const pos = site.side === 'right' ? { left: `${ax}%` } : { right: `${100 - ax}%` };

                      return (
                        <div
                          key={`label-${site.name}`}
                          aria-hidden="true"
                          className={`absolute -translate-y-1/2 ${show ? 'block' : 'hidden sm:block'}`}
                          style={{ ...pos, top: `${ay}%` }}
                        >
                          <span
                            className={`block whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] uppercase backdrop-blur-sm transition-colors ${
                              site.side === 'right' ? 'ml-1.5' : 'mr-1.5'
                            } ${
                              isActive || site.hub
                                ? 'border-gold/50 bg-ink-dark/85 text-gold'
                                : 'border-white/10 bg-ink-dark/70 text-white/75'
                            }`}
                          >
                            {site.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
            <p className="text-[11px] leading-relaxed text-white/45">
              Routes run from the Dhaka hub to every location in the network.
            </p>
            <ul className="flex items-center gap-4 font-mono text-[10px] tracking-[0.14em] text-white/40 uppercase">
              <li className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gold" />
                Hub
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full border border-gold/70" />
                Location
              </li>
            </ul>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
