import React from 'react';
import { motion } from 'motion/react';
import { Instagram as InstagramIcon } from 'lucide-react';

export default function Instagram() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=687&auto=format&fit=crop",
  ];

  return (
    <section className="py-24 bg-brand-ink text-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <InstagramIcon className="w-6 h-6 mb-4 text-brand-gold" strokeWidth={1.5} />
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide mb-4">
            @kopinusantara
          </h2>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-bg/60">
            Share your moments
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img 
                src={img} 
                alt={`Instagram post ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white" strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
