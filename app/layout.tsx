import type { Metadata } from "next";
import { hanken, kanit } from "./fonts";
import { Providers } from "./providers";
import { Loader } from "@/components/Loader";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUNTEX Apparel Group | Garment Manufacturing & Sourcing, Bangladesh",
  description:
    "Bangladesh-based garment manufacturer and sourcing partner. In-house knit & woven production, 200+ partner factories, in-house design, QC, and logistics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>
          <Loader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
