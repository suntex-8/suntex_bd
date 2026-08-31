import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Trust } from "@/components/Trust";
import { TrustVideo } from "@/components/TrustVideo";
import { Advantage } from "@/components/Advantage";
import { Counter } from "@/components/Counter";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
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
        <Services />
        <Trust />
        <TrustVideo />
        <Advantage />
        <Counter />
        <Projects />
        <Process />
        <Testimonials />
        <Pricing />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
