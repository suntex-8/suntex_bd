"use client";

import React, { useEffect, useRef, useState, useCallback, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";

interface CarouselContextType {
  onCardClose: (index: number) => void;
  currentIndex: number;
}

const CarouselContext = createContext<CarouselContextType>({
  onCardClose: () => {},
  currentIndex: 0,
});

export function useCarousel() {
  return useContext(CarouselContext);
}

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

export function Carousel({ items, initialScroll = 0 }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollLeft = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el || !initialScroll) return;
    el.scrollLeft = initialScroll;
  }, [initialScroll]);

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        {/* Navigation arrows */}
        <div className="flex justify-end gap-2 pb-4">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-white text-foreground shadow-sm transition-all hover:bg-foreground hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-foreground"
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-white text-foreground shadow-sm transition-all hover:bg-foreground hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-foreground"
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Carousel track */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-[280px] shrink-0 sm:w-[300px] md:w-[320px] lg:w-[calc((100%-60px)/3.5)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

interface CardData {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

interface CardProps {
  card: CardData;
  index: number;
  layout?: boolean;
}

export function Card({ card, index, layout = false }: CardProps) {
  const [open, setOpen] = useState(false);
  const { onCardClose } = useCarousel();

  const handleOpen = () => setOpen(true);
  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [onCardClose, index]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, handleClose]);

  return (
    <>
      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
      >
        <div className="relative aspect-3/4 overflow-hidden sm:aspect-[4/5] lg:aspect-[5/6]">
          <img
            src={card.src}
            alt={card.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-accent">
              {card.category}
            </p>
            <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
              {card.title}
            </h3>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleClose}
            />
            <motion.div
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative mx-auto max-h-[80vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-foreground backdrop-blur-sm transition-colors hover:bg-foreground hover:text-white"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              {/* Card header image */}
              <div className="relative h-48 overflow-hidden sm:h-64">
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-accent">
                    {card.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 sm:p-8">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
