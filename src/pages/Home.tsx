import React from 'react';
import { Hero } from '../components/Hero';
import { ProductShowcase } from '../components/ProductShowcase';
import { About } from '../components/About';
import { Benefits } from '../components/Benefits';
import { ScrollExperience } from '../components/ScrollExperience';
import { Contact } from '../components/Contact';
export function Home() {
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