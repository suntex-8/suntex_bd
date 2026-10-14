"use client";

import { useEffect, useState } from "react";

const CATEGORIES = ["Knit", "Woven", "Sweater", "Home Textiles", "Socks", "Shoes & Leather"];

const inputCls =
  "h-8 w-full rounded-md border border-white/10 bg-white/5 px-2.5 text-[10px] text-white outline-none transition-[border-color,background-color] placeholder:text-white/35 hover:border-white/20 focus:border-accent/70 focus:bg-white/10";

export function MiniQuoteForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request — ${category}`);
    const body = encodeURIComponent(
      `Product Category: ${category}\nApproximate Quantity: ${qty}\nTarget Delivery Date: ${date}\nEmail: ${email}`
    );
    window.location.href = `mailto:info@suntexbd.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative flex justify-end">
      <button
        type="button"
        aria-label="Open quote form"
        aria-expanded={isOpen}
        tabIndex={isOpen ? -1 : 0}
        onClick={() => setIsOpen(true)}
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-accent/60 bg-ink/80 text-accent shadow-xl shadow-black/30 backdrop-blur-xl transition-[opacity,transform,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-accent hover:text-ink motion-reduce:transition-none ${
          isOpen ? "pointer-events-none scale-90 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <span className="text-lg" aria-hidden="true">
          ↗
        </span>
      </button>

      <form
        onSubmit={handleSubmit}
        aria-hidden={!isOpen}
        className={`absolute right-0 bottom-0 w-[min(300px,calc(100vw-2.5rem))] rounded-xl border border-white/15 bg-ink/85 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl transition-[opacity,transform,visibility] duration-[250ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible translate-y-full opacity-0"
        }`}
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-white">Request a quote</span>
          <button
            type="button"
            aria-label="Close quote form"
            onClick={() => setIsOpen(false)}
            className="flex h-5 w-5 items-center justify-center rounded-full text-xs text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <select
            aria-label="Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`${inputCls} cursor-pointer`}
          >
            <option value="" disabled className="bg-ink text-white/50">
              Category
            </option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c} className="bg-ink text-white">
                {c}
              </option>
            ))}
          </select>

          <input
            aria-label="Approximate Quantity"
            type="text"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className={inputCls}
          />

          <input
            aria-label="Target Delivery Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputCls}
          />

          <input
            aria-label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCls}
            required
          />

          <button
            type="submit"
            className="col-span-2 h-8 rounded-md bg-accent text-[10px] font-semibold text-ink transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-yellow"
          >
            Get a quote
          </button>
        </div>
      </form>
    </div>
  );
}
