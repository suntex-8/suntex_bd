import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* --- The button ---
   One shape for every action on the site: a black pill, a white label,
   and a white circular chip on the trailing edge carrying the icon. The
   hover doesn't change the colour — the chip slides out to the leading
   edge and turns 45° while the label's inline padding follows it across.
   The motion carries the affordance, so the button keeps one resting
   appearance instead of a second colour state.

   Height is pinned at h-12 because the navbar pill is 60px tall at the
   lg breakpoint where this first appears; a content-sized pill would
   grow and clip against the bar. */

/* ps/pe are logical, so an RTL locale flips the padding and the chip
   travels the other way without a second set of utilities. py-1 rather
   than p-1 + ps/pe: tailwind-merge treats p-* as conflicting with ps/pe
   and drops the p-* class outright, taking the block padding with it. */
const PILL =
  "group relative inline-flex h-12 w-fit items-center cursor-pointer overflow-hidden rounded-full bg-ink py-1 ps-6 pe-14 text-sm font-medium text-white transition-all duration-500 hover:ps-14 hover:pe-6 disabled:pointer-events-none disabled:opacity-60";

/* calc() needs whitespace around the minus or the declaration is dropped
   and the chip never moves — hence the underscores. 100% - 44px lands
   the chip's trailing edge 44px in, i.e. 4px from the leading edge.
   top-1 is explicit because an absolutely positioned box with only
   `right` set resolves `top` to its static position, which inside a
   flex row is the content edge — the chip would ride the top of the
   pill. 4px + 40px + 4px is the 48px pill, so it lands centred. */
const CHIP =
  "absolute top-1 right-1 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-all duration-500 group-hover:right-[calc(100%_-_44px)] group-hover:rotate-45";

export interface ButtonProps {
  children: ReactNode;
  /** Renders a next/link anchor instead of a button. */
  href?: string;
  className?: string;
  labelClassName?: string;
  chipClassName?: string;
  /** Defaults to an ArrowUpRight, which the 45° hover turns to point along the label. */
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  "aria-label"?: string;
  variant?: "primary" | "inverted";
}

export function Button({
  children,
  href,
  className,
  labelClassName,
  chipClassName,
  icon,
  type = "button",
  onClick,
  disabled,
  variant = "primary",
  ...rest
}: ButtonProps) {
  /* A span rather than the demo's div: <button> takes phrasing content
     only, and span takes the same flex box. */
  const face = (
    <>
      <span className={cn("relative z-10 transition-all duration-500", labelClassName)}>
        {children}
      </span>
      <span
        className={cn(
          "absolute top-1 right-1 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:right-[calc(100%_-_44px)] group-hover:rotate-45",
          variant === "inverted"
            ? "bg-ink text-white"
            : "bg-white text-ink",
          chipClassName
        )}
        aria-hidden="true"
      >
        {icon ?? <ArrowUpRight size={16} />}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(PILL, className)} onClick={onClick}>
        {face}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cn(PILL, className)}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {face}
    </button>
  );
}

/* --- The icon-only control ---
   Search, the menu toggle, drawer close, the newsletter arrow. There is
   no label to give the chip's slide to, so it stays a circle and inverts
   on hover — the same black/white pair as the pill, one step quieter. */
const ICON_BUTTON =
  "inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-ink text-white transition-colors duration-300 hover:bg-white hover:text-ink disabled:pointer-events-none disabled:opacity-60";

export interface IconButtonProps {
  children: ReactNode;
  /** Required — an icon alone gives a screen reader nothing to announce. */
  label: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-expanded"?: boolean;
}

export function IconButton({
  children,
  label,
  className,
  onClick,
  type = "button",
  disabled,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(ICON_BUTTON, className)}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
