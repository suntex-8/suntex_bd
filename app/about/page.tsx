import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { MissionVision } from "@/components/MissionVision";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About Us — Suntex BD",
  description:
    "The story, mission and vision behind Suntex BD — a Bangladesh-based garment manufacturing and sourcing partner. Get in touch for a quote.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <MissionVision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
