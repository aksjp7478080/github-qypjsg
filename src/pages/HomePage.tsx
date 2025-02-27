import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import ServiceHighlights from '../components/sections/ServiceHighlights';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <ServiceHighlights />
      <About />
      <Contact />
    </>
  );
}