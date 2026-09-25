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
import { Faq } from "@/components/Faq";
import { QuoteCta } from "@/components/QuoteCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Counter />
        
        <Ticker />
        <Products />
        <Moq /> 

        <QualityAssurance />
        <Services />
        <FactoryNetwork /> 
        <Facilities /> 
        <WhoWeServe />

        <About />
        <MissionVision />
        <Team />
        <Faq />
        <QuoteCta />
        <Contact />



         {/* <Trust />
        <TrustVideo />
        <Advantage />
        
       
        
        
       
        
        <LeadTime />
        <Projects />
        <Process />
     
        
        <Testimonials />
        <Pricing />
        
        <Blog /> */}
      </main>
      <Footer />
    </>
  );
}
