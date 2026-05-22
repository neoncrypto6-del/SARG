import React from 'react';
import { motion } from 'framer-motion';
export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-ocean to-navy" />

      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-aqua/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
      

      <motion.div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-ocean/30 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
      

      <motion.div
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-aqua/15 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
      

      <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4" />
          
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>);

}