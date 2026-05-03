import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto" id="visit">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Contact Information & Form */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-brand-ink">
              Visit Us
            </h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="space-y-8 mb-12"
            >
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="flex items-start gap-4"
              >
                <MapPin className="w-5 h-5 text-brand-gold mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-semibold mb-2">Location</h4>
                  <p className="font-serif text-lg text-brand-ink/80 leading-relaxed max-w-xs">
                    Jl. Braga No. 99, Sumur Bandung<br />Bandung, Jawa Barat 40111
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="flex items-start gap-4"
              >
                <Clock className="w-5 h-5 text-brand-gold mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-semibold mb-2">Hours</h4>
                  <p className="font-serif text-lg text-brand-ink/80 leading-relaxed">
                    Mon - Sun <br /> 08:00 - 22:00
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                className="flex items-start gap-4"
              >
                <Phone className="w-5 h-5 text-brand-gold mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-semibold mb-2">Contact</h4>
                  <p className="font-serif text-lg text-brand-ink/80 leading-relaxed">
                    +62 812 3456 7890<br />hello@kopinusantara.id
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Simple Contact Form */}
            <form className="space-y-6 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-brand-ink/20 py-3 text-sm font-light placeholder-brand-ink/40 focus:outline-none focus:border-brand-ink transition-colors"
                />
              </div>
              <div className="flex gap-6">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-1/2 bg-transparent border-b border-brand-ink/20 py-3 text-sm font-light placeholder-brand-ink/40 focus:outline-none focus:border-brand-ink transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-1/2 bg-transparent border-b border-brand-ink/20 py-3 text-sm font-light placeholder-brand-ink/40 focus:outline-none focus:border-brand-ink transition-colors"
                />
              </div>
              <div>
                <button 
                  type="submit" 
                  className="mt-4 px-8 py-3 text-xs uppercase tracking-widest font-medium text-brand-bg bg-brand-ink hover:bg-brand-gold transition-colors duration-300 w-full md:w-auto"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map Embed */}
        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden relative shadow-xl rounded-2xl lg:rounded-t-full"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.080164808383!2d107.6105417!3d-6.9174639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e886add%3A0x44bf6b4f74d9e0!2sBraga%20Street%2C%20Bandung%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1715000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-90"
              title="Kopi Nusantara Location on Google Maps"
            ></iframe>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
