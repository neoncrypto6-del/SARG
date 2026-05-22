import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
export function ProductShowcase() {
  return (
    <section id="products" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            The <span className="text-aqua">Avina</span> Range
          </h2>
          <p className="text-silver/80 text-lg max-w-2xl mx-auto">
            Premium beverages crafted with innovation and care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) =>
          <ProductCard key={product.id} product={product} index={index} />
          )}
        </div>
      </div>
    </section>);

}