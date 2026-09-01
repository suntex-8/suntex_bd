import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Ticker } from "@/components/Ticker";
import { MissionVision } from "@/components/MissionVision";
import { Services } from "@/components/Services";
import { Trust } from "@/components/Trust";
import { TrustVideo } from "@/components/TrustVideo";
import { Advantage } from "@/components/Advantage";
import { Counter } from "@/components/Counter";
import { Products } from "@/components/Products";
import { Moq } from "@/components/Moq";
import { FactoryNetwork } from "@/components/FactoryNetwork";
import { Facilities } from "@/components/Facilities";
import { QualityAssurance } from "@/components/QualityAssurance";
import { LeadTime } from "@/components/LeadTime";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { WhoWeServe } from "@/components/WhoWeServe";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ticker />
        <MissionVision />
        <Services />
        <Trust />
        <TrustVideo />
        <Advantage />
        <Counter />
        <Products />
        <Moq />
        <FactoryNetwork />
        <Facilities />
        <QualityAssurance />
        <LeadTime />
        <Projects />
        <Process />
        <WhoWeServe />
        <Team />
        <Testimonials />
        <Pricing />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
