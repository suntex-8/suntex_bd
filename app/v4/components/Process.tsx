"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { processData } from "../data/SiteSectionData";
import { HEADER_DELAY } from "../lib/motion";
import { group, textIn, textInSoft } from "../lib/motion";
import {
  ArrowRight,
  ClipboardList,
  Factory,
  Handshake,
  Lightbulb,
  PackageCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];
const processIcons: LucideIcon[] = [
  ClipboardList,
  Lightbulb,
  Handshake,
  Factory,
  Truck,
  PackageCheck,
];
const processIconStyles = [
  "border-blue-700/30 bg-blue-700/10 text-blue-700",
  "border-blue-800/20 bg-blue-800/10 text-blue-800",
  "border-blue-600/25 bg-blue-600/10 text-blue-600",
  "border-blue-700/25 bg-blue-700/10 text-blue-700",
  "border-blue-800/15 bg-blue-800/5 text-blue-800",
  "border-blue-600/30 bg-blue-600/10 text-blue-600",
];
// const group: Variants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.08, delayChildren: HEADER_DELAY } },
// };
// const rise: Variants = {
//   hidden: { opacity: 0, y: 14 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
// };
// const draw: Variants = {
//   hidden: { scaleX: 0 },
//   show: { scaleX: 1, transition: { duration: 1.2, ease: EASE } },
// };

export function Process() {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id="process"
      className="bg-background py-14 sm:py-16 lg:py-20"
      variants={group}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div>
          <div>
            <motion.span
              
              className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-muted uppercase"
            >
              <span className="h-px w-8 bg-accent" />
              The process
            </motion.span>

            <motion.h2
              
              className="mt-4 font-light text-foreground"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              How it works
            </motion.h2>
          </div>

        </div>

       {/* Process */}
               <motion.ol
                 variants={group}
                 className="mt-8 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:-mx-4 lg:mt-10 lg:grid-cols-6 lg:gap-x-7"
               >
                 {processData.steps.map((step, index) => {
                   const Icon = processIcons[index];
                   const isLast = index === processData.steps.length - 1;
                   const description = (step as { description?: string }).description;
       
                   return (
                      <motion.li
                        key={step.title}
                        variants={textInSoft}
                        className="group min-w-0 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border sm:h-12 sm:w-12 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.15] group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-900/20 motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${processIconStyles[index]}`}>
                            <Icon
                              className="h-[18px] w-[18px] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.3] sm:h-5 sm:w-5 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          </span>
                          {!isLast && (
                            <span
                              aria-hidden="true"
                              className="hidden h-px flex-1 bg-line lg:block"
                            />
                          )}
                        </div>
        
                        <span className="mt-3 block text-[10px] font-medium tracking-[0.22em] text-muted tabular-nums transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-blue-700 sm:text-[11px] motion-reduce:transition-none">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-1.5 text-[13px] leading-snug font-medium text-foreground transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:-translate-y-0.5 sm:text-base motion-reduce:transition-none">
                          {step.title}
                        </p>
                        {description && (
                          <p className="mt-2 text-[12px] leading-relaxed font-light text-muted transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-foreground hidden sm:block motion-reduce:transition-none">
                            {description}
                          </p>
                        )}
                       {index === 0 && (
                         <motion.a
                           href="#contact"
                            className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#070D1D] to-[#1E3A8A] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:shadow-lg hover:shadow-blue-900/25 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
                         >
                           Start now
                           <ArrowRight
                             className="h-4 w-4 text-accent transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-ink motion-reduce:transition-none"
                             aria-hidden="true"
                           />
                         </motion.a>
                       )}
                     </motion.li>
                   );
                 })}
               </motion.ol>
      </div>
    </motion.section>
  );
}