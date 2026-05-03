import React, { useState } from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Showcase from './components/Showcase';
import Instagram from './components/Instagram';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold/30 bg-brand-bg relative">
      <div className="grain-overlay" />
      <Loader onComplete={() => setLoading(false)} />
      {!loading && <Navbar />}
      <Hero />
      <Showcase />
      <Menu />
      <Instagram />
      <ContactMap />
      <Footer />
    </div>
  );
}
