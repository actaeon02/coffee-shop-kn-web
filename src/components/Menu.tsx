import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['Signatures', 'Espresso Bar', 'Pour Over', 'Pastries'];

const MENU_DATA = {
  'Signatures': [
    { name: 'Kopi Aren Nusantara', price: '45', desc: 'Espresso, traditional palm sugar, organic milk, sea salt foam', badge: 'Popular' },
    { name: 'Pandan Latte', price: '42', desc: 'Espresso, house-made pandan extract, oat milk' },
    { name: 'Citrus Cold Brew', price: '48', desc: '48hr cold brew, clarified orange juice, tonic', badge: 'Seasonal' },
  ],
  'Espresso Bar': [
    { name: 'Espresso', price: '30', desc: 'Single origin or house blend' },
    { name: 'Macchiato', price: '35', desc: 'Espresso with a dash of textured milk' },
    { name: 'Piccolo', price: '38', desc: 'Ristretto with textured milk' },
    { name: 'Latte / Cappuccino', price: '40', desc: 'Double espresso with textured milk' },
    { name: 'Flat White', price: '40', desc: 'Double espresso with silky milk' },
  ],
  'Pour Over': [
    { name: 'Gayo Wine', price: '50', desc: 'Aceh Gayo, natural process. Notes: Jackfruit, dark chocolate, winey', badge: 'Limited' },
    { name: 'Toraja Sapan', price: '48', desc: 'Toraja, fully washed. Notes: Herbal, brown sugar, clean finish' },
    { name: 'Bali Kintamani', price: '45', desc: 'Bali, natural process. Notes: Orange, citrus twist, floral' },
  ],
  'Pastries': [
    { name: 'Butter Croissant', price: '28', desc: 'Classic French butter croissant' },
    { name: 'Kouign-Amann', price: '35', desc: 'Caramelized laminated pastry' },
    { name: 'Klepon Cake', price: '45', desc: 'Pandan sponge, coconut, palm sugar' },
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden" id="menu">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="flex flex-col md:flex-row gap-12 lg:gap-24"
      >
        {/* Sidebar / Categories */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="md:w-1/3"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-brand-ink">
            Speciality <br />
            <span className="italic opacity-60">Selection</span>
          </h2>
          
          <div className="flex overflow-x-auto hide-scrollbar md:flex-col gap-6 md:gap-4 border-b md:border-b-0 border-brand-ink/10 pb-4 md:pb-0">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-left text-sm uppercase tracking-widest transition-all duration-300 relative whitespace-nowrap pl-4 py-1
                  ${activeCategory === category 
                    ? 'text-brand-ink font-semibold' 
                    : 'text-brand-ink/40 font-medium hover:text-brand-ink/70'}`}
              >
                {activeCategory === category && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-gold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="md:w-2/3 min-h-[400px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, filter: "blur(4px)", y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8"
            >
              {MENU_DATA[activeCategory as keyof typeof MENU_DATA].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="group relative"
                >
                  <div className="flex justify-between items-baseline mb-2 relative z-10">
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-2xl text-brand-ink">{item.name}</h3>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-brand-gold/10 text-brand-gold text-[8px] uppercase tracking-widest font-bold border border-brand-gold/20 flex-shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex-grow mx-4 border-b border-brand-ink/10 border-dotted relative top-[-6px]"></div>
                    <span className="font-sans text-sm tracking-widest text-brand-ink">{item.price}k</span>
                  </div>
                  <p className="font-sans text-xs md:text-sm text-brand-ink/60 font-light max-w-[80%]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
