import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import type { Product } from '../data/products';
interface ProductCardProps {
  product: Product;
  index: number;
}
export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1
      }}
      whileHover={{
        y: -10,
        scale: 1.02
      }}
      className="group relative">
      
      <Link
        to={`/products/${product.id}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-3xl"
        aria-label={`View details for ${product.name}`}>
        
        <div
          className="relative bg-navy/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden"
          style={{
            boxShadow: `0 0 40px ${product.glowColor}20`
          }}>
          
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, ${product.glowColor}15 0%, transparent 70%)`
            }} />
          

          <motion.div
            className="absolute top-4 right-4 w-3 h-3 rounded-full"
            style={{
              backgroundColor: product.glowColor
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />
          

          <div className="relative z-10">
            <motion.div
              className="mb-6 relative"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>
              
              <motion.div
                className="absolute inset-0 blur-2xl opacity-40"
                style={{
                  background: `radial-gradient(circle, ${product.glowColor}60 0%, transparent 70%)`
                }} />
              
              <img
                src={product.image}
                alt={product.name}
                className="relative w-full h-64 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                style={{
                  filter: `drop-shadow(0 0 30px ${product.glowColor}80)`
                }} />
              
            </motion.div>

            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold mb-2 text-ice group-hover:text-aqua transition-colors">
                  {product.name}
                </h3>
                <p className="text-silver/80 text-sm">{product.tagline}</p>
              </div>
              <div
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-aqua group-hover:border-aqua group-hover:text-navy transition-all duration-300 text-ice"
                aria-hidden="true">
                
                <ArrowUpRightIcon size={16} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>);

}