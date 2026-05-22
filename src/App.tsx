import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BackgroundBlobs } from './components/BackgroundBlobs';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProductDetail } from './components/ProductDetail';
export function App() {
  return (
    <div className="relative min-h-screen w-full bg-navy">
      <BackgroundBlobs />
      <Navbar />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>);

}