import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden flex flex-col items-center justify-center text-brand-bg bg-brand-ink">
      {/* Background Image with Overlay */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
          alt="Coffee preparation"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/40 to-transparent"></div>
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
        }}
        className="z-10 flex flex-col items-center text-center px-6 mt-16 max-w-4xl"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-semibold mb-6"
        >
          Bandung, West Java
        </motion.p>
        
        <motion.h1 
          variants={{
            hidden: { opacity: 0, scale: 0.95, y: 30 },
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.85] font-light tracking-tight mb-8"
        >
          Kopi <br />
          <span className="italic pl-4 md:pl-12">Nusantara</span>
        </motion.h1>
        
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="font-sans text-xs md:text-sm font-light tracking-[0.1em] text-[#f5f2ed]/70 max-w-sm mx-auto leading-relaxed border-t border-brand-bg/20 pt-8 mt-4"
        >
          The art of slow brewing. <br />
          Discover the soul of Indonesian beans in every refined drop.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="absolute bottom-10 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#f5f2ed]/50 vertical-text origin-bottom" style={{ writingMode: 'vertical-rl' }}>Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#f5f2ed]/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
