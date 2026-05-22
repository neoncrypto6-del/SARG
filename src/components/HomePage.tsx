import React from 'react';
import { Hero } from './Hero';
import { ProductShowcase } from './ProductShowcase';
import { About } from './About';
import { Benefits } from './Benefits';
import { ScrollExperience } from './ScrollExperience';
import { Contact } from './Contact';
export function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <About />
      <Benefits />
      <ScrollExperience />
      <Contact />
    </>);

}