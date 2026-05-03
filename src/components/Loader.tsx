import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-ink text-brand-bg"
        >
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif italic text-4xl tracking-[0.2em]"
            >
              Kopi Nusantara
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="w-24 h-[1px] bg-brand-gold origin-left"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4 font-sans text-[10px] uppercase tracking-[0.4em] text-brand-bg/40"
          >
            Est. 2024
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
