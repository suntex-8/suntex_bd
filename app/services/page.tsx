import { Navbar } from "@/components/Navbar";
import { ServicesHero } from "@/components/ServicesHero";
import { Services } from "@/components/Services";
import { Faq } from "@/components/Faq";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Trust } from "@/components/Trust";
import { TrustVideo } from "@/components/TrustVideo";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Services — Suntex BD",
  description:
    "Explore Suntex BD's complete textile and garment manufacturing services.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <Services />
        <Faq />
        <ProcessTimeline />
        <Trust />
        <TrustVideo />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}
