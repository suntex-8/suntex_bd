# Suntex BD — Texora-style Website

General build / maintenance instructions for this site.

## Stack
- **Next.js 16 (App Router)** · React 19 · TypeScript · Tailwind CSS v4
- **motion** (`motion/react`) — animations & parallax
- **lenis** (`lenis/react`) — smooth scrolling
- **lucide-react** — icons

## Running the project
```bash
npm install      # first time only
npm run dev      # start dev server
npm run build    # production build
npm run lint     # lint check
```

## Data-driven editing
**All editable content lives in `data/` — no need to touch components.**
- `data/HeroSectionData.ts` — hero slider slides (bg image, sub-title, headline, paragraph, CTA), social rail, autoplay speed.
- `data/NavbarData.ts` — logo, menu links, dropdowns, CTA button, search toggle.
- `data/SiteSectionData.ts` — About, Services, Why-Global-Brands-Trust-Us, Advantage, Counter, Projects, Process, Testimonials, Pricing, Contact, Blog, Footer.

### How to change an image
Every image is stored as a path/link inside a data file. Put your real images in `public/` then reference them like `/your-image.jpg`, e.g.:

```ts
// HeroSectionData.ts
image: "/context/hero_ss/Screenshot 2026-08-31 023801.png"
```
→ change to `image: "/images/my-new-hero.jpg"`.

For the **Why Global Brands Trust Us** parallax background, edit `trustData.demoImage` in `SiteSectionData.ts`.

## Design system
- **Brand accent (yellow):** `#fbe87e` (Tailwind: `accent`, `yellow`).
- **Dark text:** `#0b0f14` (`foreground`).
- **Typography:** `Kanit` (600) for headings (`.font-display` / h1–h6), `Hanken Grotesk` for body. Defined via `next/font` in `app/fonts.ts` (self-hosted at build time).
- **Custom cursor:** yellow circle follows the pointer (see `components/CustomCursor.tsx`); only active on fine-pointer devices (`cursor: none` in `globals.css`).

## Images
- All images are **free Pexels/Unsplash URLs** stored directly in the data files (change the string anytime).
- External image hosts are allowed via `images.remotePatterns` in `next.config.ts` (`images.pexels.com`, `images.unsplash.com`). Add a new host there if you use another source.

## Smooth scrolling
Handled globally by `app/providers.tsx` (wraps `<ReactLenis root>` from `lenis/react`). Duration is set to `1.8` for a longer, easier scroll. Increase/decrease it there.

## Sections (components/)
`Navbar`, `Hero` (auto-rotating slider), `About`, `Services`, `Trust` (parallax), `Advantage`, `Counter`, `Projects`, `Process`, `Testimonials`, `Pricing`, `Contact`, `Blog`, `Footer`. All animated with motion (scroll-reveal via `whileInView`).

## Navbar behavior
- **In the hero (not scrolled):** the navbar is a **rounded floating pill** (inset from the edges).
- **When scrolled** into other sections: it becomes a **full-width** bar with a solid backdrop.
- **Mobile:** a **hamburger** button opens a slide-in drawer with an accordion menu.

## Notes
- All demo images are free Pexels/Unsplash stock photos. Replace them with real Suntex BD assets if needed.
- Update contact details, phone numbers, social links, and footer info in the data files.
