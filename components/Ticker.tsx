"use client";

const items = [
  "Natural fibers",
  "Performance knits",
  "Responsible color",
  "Made to move",
  "Mill to market",
  "Natural fibers",
  "Performance knits",
  "Responsible color",
  "Made to move",
  "Mill to market",
];

export function Ticker() {
  return (
    <div className="overflow-hidden bg-ink py-5">
      <div className="flex w-max animate-[ticker_25s_linear_infinite]">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-5 px-7 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/75"
          >
            {item}
            <span className="h-1 w-1 rotate-45 bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
