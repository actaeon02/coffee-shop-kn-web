import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Showcase() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section className="py-24 bg-[#ebe7e0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-brand-gold font-sans text-[10px] uppercase tracking-[0.4em] mb-6 block">Featured Beverage</span>
              <h2 className="font-serif text-5xl md:text-6xl text-brand-ink leading-tight mb-8">
                The Gayo <br /> <span className="italic">Wine Process</span>
              </h2>
              <p className="font-sans text-sm md:text-base text-brand-ink/60 leading-relaxed mb-10 max-w-md">
                Our signature natural process Gayo beans undergo a 30-day extended fermentation, resulting in deep, complex notes of jackfruit, dark chocolate, and a distinct wine-like body.
              </p>
              
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-brand-ink/40 mb-1">Elevation</span>
                  <span className="font-serif text-lg">1,600m</span>
                </div>
                <div className="w-[1px] h-8 bg-brand-ink/10"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-brand-ink/40 mb-1">Body</span>
                  <span className="font-serif text-lg">Heavy</span>
                </div>
                <div className="w-[1px] h-8 bg-brand-ink/10"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-brand-ink/40 mb-1">Roast</span>
                  <span className="font-serif text-lg">Medium</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <motion.div 
              style={{ rotate }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              {/* Decorative Circle */}
              <div className="absolute inset-0 border border-brand-gold/20 rounded-full scale-110"></div>
              <div className="absolute inset-0 border border-brand-ink/5 rounded-full scale-125"></div>
              
              <motion.img 
                src="https://images.unsplash.com/photo-1692296113053-76f240e5ce33?q=80&w=687&auto=format&fit=crop"
                alt="Coffee beans close up"
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
