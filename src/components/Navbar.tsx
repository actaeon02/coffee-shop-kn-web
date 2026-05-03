import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-colors duration-500 ${
          scrolled || isOpen ? "bg-brand-bg/80 backdrop-blur-md border-b border-brand-ink/5" : "bg-transparent"
        }`}
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`font-serif italic text-xl tracking-widest transition-colors duration-500 ${
            scrolled || isOpen ? "text-brand-ink" : "text-brand-bg"
          }`}
        >
          K.N.
        </button>

        <div className="flex items-center gap-4 md:gap-8">
          <div className={`hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${
            scrolled ? "text-brand-ink/60" : "text-brand-bg/60"
          }`}>
            <button onClick={() => scrollTo('menu')} className="hover:text-brand-gold transition-colors">Menu</button>
            <button onClick={() => scrollTo('visit')} className="hover:text-brand-gold transition-colors">Location</button>
            <button className="hover:text-brand-gold transition-colors">About</button>
          </div>

          <button className={`hidden sm:block px-6 py-2 text-[10px] uppercase tracking-widest font-semibold border rounded-full transition-all duration-500 ${
            scrolled || isOpen
              ? "border-brand-ink/20 text-brand-ink hover:bg-brand-ink hover:text-brand-bg" 
              : "border-brand-bg/30 text-brand-bg hover:bg-brand-bg hover:text-brand-ink"
          }`}>
            Reserve
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              scrolled || isOpen ? "text-brand-ink" : "text-brand-bg"
            }`}
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-brand-bg flex flex-col items-center justify-center gap-12 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-serif">
              <button onClick={() => scrollTo('menu')} className="hover:text-brand-gold transition-colors italic">The Menu</button>
              <button onClick={() => scrollTo('visit')} className="hover:text-brand-gold transition-colors italic">Find Us</button>
              <button className="hover:text-brand-gold transition-colors italic">Our Story</button>
            </div>
            
            <button className="mt-8 px-12 py-4 border border-brand-ink/20 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-brand-ink hover:text-brand-bg transition-all">
              Make a Reservation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
