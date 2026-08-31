import type { Metadata } from "next";
import { hanken, kanit } from "./fonts";
import { Providers } from "./providers";
import { Loader } from "@/components/Loader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suntex BD | Textile & Garment Manufacturing",
  description:
    "Suntex BD is a leading textile & garment manufacturing company producing high quality fabrics and apparel for global brands.",
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
