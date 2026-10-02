import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Chart from './components/Chart';
import Products from './components/Products';
import Relationship from './components/Relationship';
import Process from './components/Process';
import Delivery from './components/Delivery';
import Network from './components/Network';
import Made from './components/Made';
import About from './components/About';
import Mission from './components/Mission';
import Specialists from './components/Specialists';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="v3-page overflow-hidden bg-cream">
      <Hero nav={<Navbar isOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />} />
      <main>
        <Intro />
       
        <Products />
        <Relationship />
        <Process />
        <Delivery />
        <Network />
        <Made />
        <About />
        <Mission />
        <Specialists />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
