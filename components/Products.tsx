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
import { group, rule, textIn, textInSoft } from "@/lib/motion";
import { productsData } from "@/data/SiteSectionData";
import {
  productCards,
  type ProductCard as ProductCardData,
  type ProductCardIconKey,
} from "@/data/ProductCardsData";

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

function SupplyTally({
  count,
  label,
  categories,
}: {
  count: number;
  label: string;
  categories: string[];
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="font-display text-3xl font-semibold text-foreground">
          {count}
        </span>
        <h3 className="text-sm font-semibold text-foreground">{label}</h3>
      </div>
      <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted">
        {categories.join(", ")}
      </p>
    </div>
  );
}

export function Products() {
  const prefersReducedMotion = useReducedMotion();
  const inHouse = productCards.filter((c) => c.supply === "in-house");
  const partner = productCards.filter((c) => c.supply === "partner");

  return (
    <motion.section
      id="products"
      className="relative isolate overflow-hidden bg-surface py-20 lg:py-28"
      variants={group}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* One quiet wash, held to a corner, instead of a blurred field. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-[-28%] right-[-8%] h-[620px] w-[620px] rounded-[50%] bg-accent/12 blur-[130px] lg:h-[760px] lg:w-[760px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <motion.span
              variants={textInSoft}
              className="inline-flex items-center gap-3 text-sm font-semibold text-muted"
            >
              <span className="h-px w-8 bg-accent" />
              {productsData.subTitle}
            </motion.span>

            <motion.h2
              variants={textIn}
              className="mt-5 max-w-2xl text-[32px] text-foreground sm:text-4xl lg:text-[44px]"
            >
              {productsData.headline}
            </motion.h2>
          </div>

          <motion.div variants={textInSoft} className="lg:col-span-5">
            <p className="max-w-md text-[15px] leading-relaxed text-muted">
              {productsData.caption}
            </p>
          </motion.div>
        </div>

        <motion.span
          variants={rule}
          className="mt-12 block h-px w-full origin-left bg-line"
        />

        <motion.div
          variants={textIn}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {productCards.map((item) => (
            <ProductCard key={item.category} item={item} />
          ))}
        </motion.div>

        <motion.div
          variants={textInSoft}
          className="mt-14 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 sm:gap-12"
        >
          <SupplyTally
            count={inHouse.length}
            label="Manufactured in-house"
            categories={inHouse.map((c) => c.category)}
          />
          <SupplyTally
            count={partner.length}
            label="Via trusted partners"
            categories={partner.map((c) => c.category)}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}