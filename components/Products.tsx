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
import { FeralGradient } from "@/components/FeralGradient";

const productIcons: Record<ProductCardIconKey, LucideIcon> = {
  knit: Shirt,
  woven: Layers3,
  sweater: Boxes,
  home: BedDouble,
  socks: Footprints,
  shoes: ShoppingBag,
};

function ProductCard({ item }: { item: ProductCardData }) {
  const ProductIcon = productIcons[item.icon];

  return (
    <article
      tabIndex={0}
      className="product-card group relative isolate h-[210px] overflow-hidden rounded-[20px] border border-white/12 bg-ink outline-none sm:h-[228px] lg:h-[240px]"
    >
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="product-card-image object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/5" />

      <div className="absolute inset-x-5 bottom-4 z-10">
        <span className="mb-2 block h-px w-8 bg-accent" />
        <h3 className="font-display text-xl leading-tight font-semibold text-white">
          {item.category}
        </h3>
      </div>

      <div className="product-card-mask absolute inset-x-0 top-[36%] bottom-0 z-20 flex flex-col justify-end p-5 md:inset-0">
        <div className="relative z-10">
          <span className="text-[11px] font-medium text-accent">
            {item.note}
          </span>
          <h3 className="mt-1.5 font-display text-xl leading-tight font-semibold text-white">
            {item.category}
          </h3>
          <p className="mt-2 line-clamp-3 max-w-[34ch] text-[13px] leading-snug text-white/70">
            {item.description}
          </p>
        </div>
      </div>

      <span className="absolute top-4 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-accent text-ink">
        <ProductIcon className="h-4 w-4" aria-hidden="true" />
      </span>
    </article>
  );
}

export function Products() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="products"
      className="relative isolate overflow-hidden bg-surface py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <FeralGradient
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            aspectRatio: "auto",
          }}
        />
        <div className="absolute inset-0 bg-surface/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10">
          <motion.span
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted"
          >
            <span className="h-px w-8 bg-accent" />
            {productsData.subTitle}
          </motion.span>
          <motion.h2
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-[32px] leading-[1.08] text-foreground sm:text-4xl lg:text-[44px]"
          >
            {productsData.headline}
          </motion.h2>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {productCards.map((item) => (
            <ProductCard key={item.category} item={item} />
          ))}
        </motion.div>

        <p className="mt-9 max-w-2xl text-sm leading-relaxed text-muted">
          {productsData.caption}
        </p>
      </div>
    </section>
  );
}
