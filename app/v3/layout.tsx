import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "SUNTEX Apparel Group | Design V3",
  description:
    "Bangladesh-based garment manufacturer and sourcing partner. In-house knit & woven production, 200+ partner factories, in-house design, QC, and logistics.",
};

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap";

export default function V3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href={FONT_URL} precedence="default" />
      {children}
    </>
  );
}
