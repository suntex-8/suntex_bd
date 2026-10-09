"use client";

import { useState } from "react";

const CATEGORIES = ["Knit", "Woven", "Sweater", "Home Textiles", "Socks", "Shoes & Leather"];

const inputCls =
  "w-full border-0 border-b border-white/15 bg-transparent px-2 py-2 text-[11px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-accent/60";

export function MiniQuoteForm() {
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request — ${category}`);
    const body = encodeURIComponent(
      `Product Category: ${category}\nApproximate Quantity: ${qty}\nTarget Delivery Date: ${date}\nEmail: ${email}`
    );
    window.location.href = `mailto:info@suntexbd.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-3 rounded-xl border border-white/10 bg-ink/40 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur-xl"
    >
      <select
        aria-label="Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={`${inputCls} w-24 cursor-pointer`}
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
        className={`${inputCls} w-16`}
      />

      <input
        aria-label="Target Delivery Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={`${inputCls} w-32`}
      />

      <input
        aria-label="Email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${inputCls} w-28`}
      />

      <button
        type="submit"
        className="shrink-0 rounded-lg bg-white px-4 py-2 text-[11px] font-semibold text-ink transition-opacity hover:opacity-90"
      >
        Get a Quote
      </button>
    </form>
  );
}
