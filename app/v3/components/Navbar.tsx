import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

function Brand() {
  return (
    <a className="flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] text-white" href="#top">
      <span className="w-[25px] h-[25px] grid place-items-center text-gold border-2 border-gold rounded-full font-serif text-[18px] font-normal">
        S
      </span>
      <span>SUNTEX</span>
    </a>
  );
}

export default function Navbar({ onToggle, isOpen }: { onToggle: () => void; isOpen: boolean }) {
  const closeMenu = () => onToggle();
  return (
    <nav className="h-[84px] flex items-center justify-between relative z-[4] border-b border-white/20">
      <Brand />
      <div className={`flex items-center gap-[34px] text-xs text-white/82 ${isOpen ? 'flex flex-col items-stretch gap-[18px] absolute top-[70px] left-0 right-0 px-5 py-[18px] bg-ink-dark border-b border-[#174b9c]' : 'hidden'} md:flex`}>
        <a href="#about" onClick={closeMenu} className="transition-colors hover:text-gold">About Us</a>
        <a href="#services" onClick={closeMenu} className="transition-colors hover:text-gold">Services</a>
        <a href="#products" onClick={closeMenu} className="transition-colors hover:text-gold">Products</a>
        <a href="#facilities" onClick={closeMenu} className="transition-colors hover:text-gold">Facilities</a>
        <a href="#contact" onClick={closeMenu} className="flex items-center gap-[7px] px-[17px] py-[11px] bg-gold text-ink font-semibold rounded-sm hover:justify-center">
          Get In Touch <ArrowRight size={15} />
        </a>
      </div>
      <button className="md:hidden text-white bg-transparent border-0 cursor-pointer" aria-label="Toggle menu" onClick={onToggle}>
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </nav>
  );
}
