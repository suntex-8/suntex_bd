export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`eyebrow flex items-center gap-3 ${light ? "text-[#fff000]" : "text-[#666b76]"}`}
    >
      <span className={`h-px w-7 ${light ? "bg-[#fff000]" : "bg-[#1b2130]"}`} />
      {children}
    </div>
  );
}
