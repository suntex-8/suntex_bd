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
    <div className="overflow-hidden bg-foreground py-4">
      <div className="flex w-max animate-[ticker_25s_linear_infinite]">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-4 px-6 text-sm font-medium uppercase tracking-widest text-white/80"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
