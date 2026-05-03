import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-bg pt-16 pb-8 px-6 md:px-12 border-t border-brand-bg/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif italic text-xl tracking-wider">
          Kopi Nusantara
        </div>
        
        <div className="flex gap-6 text-[10px] uppercase tracking-widest text-brand-bg/60">
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Press</a>
        </div>
        
        <div className="text-[10px] uppercase tracking-widest text-brand-bg/40">
          &copy; {new Date().getFullYear()} Kopi Nusantara. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
