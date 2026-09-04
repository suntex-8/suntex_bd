"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { MissionVision } from "./components/MissionVision";
import { Services } from "./components/Services";
import { Advantage } from "./components/Advantage";
import { AdvantageCarousel } from "./components/AdvantageCarousel";
import { Counter } from "./components/Counter";
import { Process } from "./components/Process";
import { Products } from "./components/Products";
import { QualityAssurance } from "./components/QualityAssurance";
import { FactoryNetwork } from "./components/FactoryNetwork";
import { Facilities } from "./components/Facilities";
import { Team } from "./components/Team";
import { WhoWeServe } from "./components/WhoWeServe";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";

export default function V2Page() {
  return (
    <main className="grain overflow-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <MissionVision />
      
      <Advantage />
      <AdvantageCarousel />
      <Counter />
      <Process />
      <Products />
      <Services />
      <QualityAssurance />
      <FactoryNetwork />
      <Facilities />
      <Team />
      <WhoWeServe />
      <Testimonials />
      <Pricing />
      <Faq />
      <Contact />
      <Blog />
      <Footer />
    </main>
  );
}
