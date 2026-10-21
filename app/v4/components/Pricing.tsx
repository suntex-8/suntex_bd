"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { pricingData } from "../data/SiteSectionData";
import { HEADER_DELAY } from "../lib/motion";
import { SectionHeader } from "./SectionHeader";
import { ArrowRight, Download, CheckCircle2 } from 'lucide-react';

export function Pricing() {
 return (
    <section className="relative min-h-[90vh] w-full bg-[#0B0F17] text-white flex flex-col justify-between px-6 lg:px-16 py-12 overflow-hidden">
      
      {/* Background Radial Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto pt-8">
        
        {/* Left Column: Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-wide text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            500 Pcs MOQ · 7-Day Sample Turnaround
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
            Next-Gen Garment Manufacturing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              & Global Sourcing
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-slate-400 text-lg max-w-xl font-light leading-relaxed">
            Connecting ideas to reality. Full-service knit & woven production built in Bangladesh with 200+ composite factory networks.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#quote"
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center gap-2 group"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#catalog"
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-slate-400" />
              Factory Profile (PDF)
            </a>
          </div>
        </div>

        {/* Right Column: Embedded Mini RFQ Widget */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Get Instant Feasibility</h3>
              <p className="text-xs text-slate-400">Submit your basic spec for quick quote assessment.</p>
            </div>

            <form className="space-y-3">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Product Category</label>
                <select className="w-full bg-slate-900/80 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400">
                  <option>Knitwear (T-Shirts, Hoodies)</option>
                  <option>Woven Garments</option>
                  <option>Sweaters & Outerwear</option>
                  <option>Activewear / Home Textile</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Est. Quantity (PCS)</label>
                <input
                  type="number"
                  placeholder="e.g. 500"
                  className="w-full bg-slate-900/80 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Work Email</label>
                <input
                  type="email"
                  placeholder="sourcing@brand.com"
                  className="w-full bg-slate-900/80 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="button"
                className="w-full mt-2 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-md"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Bottom Horizontal Trust Strip */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400" />
          <span>6M+ Monthly Production Capacity</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400" />
          <span>In-House QC & Inspection Station</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400" />
          <span>200+ Partner Composite Factories</span>
        </div>
      </div>

    </section>
  );
}
