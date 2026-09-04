import type { Metadata } from "next";
import { hanken, kanit } from "../fonts";
import "../v2/globals.css";

export const metadata: Metadata = {
  title: "SUNTEX Apparel Group | Garment Manufacturing & Sourcing, Bangladesh",
  description:
    "Bangladesh-based garment manufacturer and sourcing partner. In-house knit & woven production, 200+ partner factories, in-house design, QC, and logistics.",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
