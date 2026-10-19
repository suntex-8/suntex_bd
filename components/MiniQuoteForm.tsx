"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Send, X } from "lucide-react";

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
        className={`absolute right-0 bottom-0 w-[min(250px,calc(100vw-2.5rem))] rounded-2xl border border-white/15 bg-ink/85 p-2.5 shadow-2xl shadow-black/40 backdrop-blur-xl transition-[opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[min(280px,calc(100vw-2.5rem))] sm:p-3 motion-reduce:transition-none ${
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

        <div className="flex items-center gap-2 pt-1.5 sm:pt-2">
          <h4 className="text-[13px] font-semibold tracking-tight text-white sm:text-sm">
            Request a quote
          </h4>
          <Image
            src="/suntex1logo.png"
            alt="SUNTEX"
            width={16}
            height={16}
            className="h-4 w-4 rounded-full object-contain"
          />
        </div>

        <div className="grid grid-cols-2 gap-1.5 pt-4 sm:gap-2 sm:pt-5">
          <select
            aria-label="Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`${inputCls} col-span-2 cursor-pointer max-sm:h-7 max-sm:px-2`}
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
            className={`${inputCls} max-sm:h-7 max-sm:px-2`}
          />

          <input
            aria-label="Target Delivery Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`${inputCls} scheme-dark max-sm:h-7 max-sm:px-2`}
          />

          <div className="col-span-2 flex items-center gap-2">
            <input
              aria-label="Email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${inputCls} max-sm:h-7 max-sm:px-2`}
              required
            />
            <button
              type="submit"
              aria-label="Get a quote"
              className="group inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[11px] font-medium text-ink transition-colors hover:bg-white/85 sm:h-8 sm:w-auto sm:gap-1.5 sm:px-3"
            >
              <span className="hidden sm:inline">Send</span>
              <Send className="h-3.5 w-3.5 sm:hidden" aria-hidden="true" />
              <ArrowRight
                className="hidden h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 sm:inline motion-reduce:transition-none"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
