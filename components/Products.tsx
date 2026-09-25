"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  BedDouble,
  Boxes,
  Footprints,
  Layers3,
  Shirt,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { productsData } from "@/data/SiteSectionData";
import {
  productCards,
  type ProductCard as ProductCardData,
  type ProductCardIconKey,
} from "@/data/ProductCardsData";
import { TwistingRibbon } from "@/components/TwistingRibbon";

const ribbonColors = {
  face: "#ffd60a",
  foldA: "#fff07a",
  foldB: "#f0a500",
  foldC: "#fffbe0",
};

const productIcons: Record<ProductCardIconKey, LucideIcon> = {
  knit: Shirt,
  woven: Layers3,
  sweater: Boxes,
  home: BedDouble,
  socks: Footprints,
  shoes: ShoppingBag,
};

function ProductCard({
  item,
  index,
}: {
  item: ProductCardData;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ProductIcon = productIcons[item.icon];

  return (
    <motion.article
      tabIndex={0}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.55,
        delay: prefersReducedMotion ? 0 : index * 0.06,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="product-card group relative isolate h-[340px] overflow-hidden rounded-[28px] border border-white/10 bg-ink outline-none sm:h-[360px]"
    >
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="product-card-image object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/10" />

      <span className="absolute top-6 left-6 z-10 text-xs font-semibold text-white/75">
        {item.note}
      </span>

      <div className="absolute inset-x-6 bottom-6 z-10">
        <span className="mb-3 block h-px w-10 bg-accent" />
        <h3 className="font-display text-3xl font-semibold text-white">
          {item.category}
        </h3>
      </div>

      <div className="product-card-mask absolute inset-x-0 bottom-0 top-[32%] z-20 flex flex-col justify-end bg-ink/95 p-6 md:inset-0">
        <span className="text-xs font-semibold text-accent">{item.note}</span>
        <h3 className="mt-3 font-display text-3xl font-semibold text-white">
          {item.category}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
          {item.description}
        </p>
        <div className="mt-5 flex items-center gap-3 text-xs font-semibold text-white/70">
          <span className="h-px w-8 bg-accent" />
          Quality checked
        </div>
      </div>

      <span className="absolute top-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-accent text-ink shadow-lg">
        <ProductIcon className="h-5 w-5" aria-hidden="true" />
      </span>
    </motion.article>
  );
}

export function Products() {
  return (
    <section
      id="products"
      className="relative isolate overflow-hidden bg-surface py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[760px] overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-x-[-4%] top-[-90px] h-[520px] opacity-60 mix-blend-multiply">
          <TwistingRibbon
            segments={260}
            waveSpeed={0.012}
            waveAmplitude={0.75}
            twistCycles={5}
            lightColors={ribbonColors}
            darkColors={ribbonColors}
            className="rounded-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/10 via-surface/85 to-surface" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted"
          >
            <span className="h-px w-8 bg-accent" />
            {productsData.subTitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-[32px] leading-[1.08] text-foreground sm:text-4xl lg:text-[44px]"
          >
            {productsData.headline}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCards.map((item, index) => (
            <ProductCard key={item.category} item={item} index={index} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-relaxed text-muted">
          {productsData.caption}
        </p>
      </div>
    </section>
  );
}
