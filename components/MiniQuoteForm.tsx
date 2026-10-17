"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";

const CATEGORIES = ["Knit", "Woven", "Sweater", "Home Textiles", "Socks", "Shoes & Leather"];

const inputCls =
  "h-8 w-full rounded-lg border border-white/10 bg-white/5 px-2.5 text-[11px] text-white outline-none transition-[border-color,background-color] placeholder:text-white/40 hover:border-white/20 focus:border-white/50 focus:bg-white/10";

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
      {/* Launcher */}
      <button
        type="button"
        aria-label="Open quote form"
        aria-expanded={isOpen}
        tabIndex={isOpen ? -1 : 0}
        onClick={() => setIsOpen(true)}
        className={`flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-lg shadow-black/25 transition-[opacity,transform,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/85 motion-reduce:transition-none ${
          isOpen ? "pointer-events-none scale-90 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
      </button>

      <form
        onSubmit={handleSubmit}
        aria-label="Request a quote"
        aria-hidden={!isOpen}
        className={`absolute right-0 bottom-0 w-[min(280px,calc(100vw-2.5rem))] rounded-2xl border border-white/15 bg-ink/85 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl transition-[opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible translate-y-6 opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close quote form"
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>

        <h4 className="pt-2 text-sm font-semibold tracking-tight text-white">
          Request a quote
        </h4>

        <div className="grid grid-cols-2 gap-2 pt-5">
          <select
            aria-label="Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`${inputCls} col-span-2 cursor-pointer`}
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
            placeholder="Qty"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className={inputCls}
          />

          <input
            aria-label="Target Delivery Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`${inputCls} scheme-dark`}
          />

          <div className="col-span-2 flex items-center gap-2">
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
              aria-label="Get a quote"
              className="group inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 text-[11px] font-medium text-ink transition-colors hover:bg-white/85"
            >
              Send
              <ArrowRight
                className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
