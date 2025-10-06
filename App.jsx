import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    beranda: heroRef,
    layanan: servicesRef,
    portofolio: portfolioRef,
    tentang: aboutRef,
    kontak: contactRef,
  };

  const scrollToSection = (sectionId) => {
    const section = sections[sectionId];
    if (section && section.current) {
      section.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <Helmet>
        <title>Noire Sport Building - Konstruksi Lapangan Olahraga Profesional</title>
        <meta name="description" content="Jasa konstruksi lapangan olahraga terpercaya untuk padel, futsal, mini soccer, tenis, dan gedung serbaguna. Kualitas premium dengan teknologi terdepan." />
        <meta property="og:title" content="Avelia Sport Building - Konstruksi Lapangan Olahraga Profesional" />
        <meta property="og:description" content="Jasa konstruksi lapangan olahraga terpercaya untuk padel, futsal, mini soccer, tenis, dan gedung serbaguna. Kualitas premium dengan teknologi terdepan." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 sport-pattern">
        <Header scrollToSection={scrollToSection} />
        <main>
          <motion.div ref={heroRef} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <Hero />
          </motion.div>
          <motion.div ref={servicesRef} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <Services />
          </motion.div>
          <motion.div ref={portfolioRef} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <Portfolio />
          </motion.div>
          <About/>
          <motion.div ref={contactRef} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
            <Contact />
          </motion.div>
        </main>
        <Footer scrollToSection={scrollToSection} />
        <Toaster />
      </div>
    </>
  );
}

export default App;