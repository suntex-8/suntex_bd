"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      className="group relative isolate h-[280px] overflow-hidden rounded-2xl bg-ink outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:h-[300px] lg:h-[320px]"
    >
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05] group-focus-visible:scale-[1.05] motion-reduce:transition-none"
      />

      {/* Resting scrim: just enough for the title to read */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/10 to-transparent"
      />

      {/* Reveal scrim: fades in on top, deeper and taller */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink via-ink/85 to-ink/20 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
      />

      {/* Caption: the title stays, details unfold beneath it */}
      <div className="absolute inset-x-5 bottom-5 z-10">
        <span className="mb-2.5 block h-px w-6 bg-accent transition-all duration-500 ease-out group-hover:w-12 group-focus-visible:w-12 motion-reduce:transition-none" />

        <h3 className="font-display text-lg leading-tight font-medium tracking-[-0.01em] text-white">
          {item.category}
        </h3>

        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] motion-reduce:transition-none">
          <div className="overflow-hidden">
            <div className="translate-y-2 pt-2.5 opacity-0 transition-all delay-100 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
              <span className="text-[10px] font-medium tracking-[0.16em] text-accent uppercase">
                {item.note}
              </span>
              <p className="mt-1.5 line-clamp-3 max-w-[36ch] text-[12px] leading-[1.55] font-light text-white/75">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Icon badge: quiet glass at rest, accent when active */}
      <span
        aria-hidden="true"
        className="absolute top-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-ink/35 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink group-focus-visible:border-accent group-focus-visible:bg-accent group-focus-visible:text-ink motion-reduce:transition-none"
      >
        <ProductIcon className="h-3.5 w-3.5" />
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateControls = () => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      setCanScrollPrevious(carousel.scrollLeft > 2);
      setCanScrollNext(carousel.scrollLeft < maxScroll - 2);
    };

    updateControls();
    carousel.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);
    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(carousel);

    return () => {
      carousel.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollProducts = (direction: "previous" | "next") => {
    carouselRef.current?.scrollBy({
      left: (direction === "next" ? 1 : -1) * carouselRef.current.clientWidth,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

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

          <motion.div
            variants={textInSoft}
            className="flex items-end justify-between gap-6 lg:col-span-5"
          >
            <p className="max-w-md text-[15px] leading-relaxed text-muted">
              {productsData.caption}
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                aria-label="Previous products"
                onClick={() => scrollProducts("previous")}
                disabled={!canScrollPrevious}
                className="grid h-10 w-10 place-items-center rounded-full border border-foreground/25 bg-background text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next products"
                onClick={() => scrollProducts("next")}
                disabled={!canScrollNext}
                className="grid h-10 w-10 place-items-center rounded-full border border-accent bg-accent text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.span
          variants={rule}
          className="mt-12 block h-px w-full origin-left bg-line"
        />

        <motion.div
          variants={textIn}
          ref={carouselRef}
          role="region"
          aria-label="Product categories"
          tabIndex={0}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 outline-none scrollbar-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
        >
          {productCards.map((item) => (
            <div
              key={item.category}
              className="w-[calc(100%-2rem)] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(20%-0.8rem)]"
            >
              <ProductCard item={item} />
            </div>
          ))}
        </motion.div>

       
      </div>
    </motion.section>
  );
}