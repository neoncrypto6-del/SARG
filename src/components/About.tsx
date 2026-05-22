import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -50]);
  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Crafted with <span className="text-aqua">Purpose</span>
            </h2>
            <p className="text-silver/90 text-lg leading-relaxed mb-6">
              Sarg Group is a forward-thinking company committed to delivering
              high-quality beverages that combine nutrition, taste, and
              innovation.
            </p>
            <p className="text-silver/80 leading-relaxed mb-6">
              Our Avina brand represents the pinnacle of beverage excellence,
              offering a diverse range of products that cater to modern
              lifestyles while maintaining our commitment to quality and
              sustainability.
            </p>
            <p className="text-silver/80 leading-relaxed">
              From pure hydration to plant-based nutrition, every Avina product
              is crafted with precision and care, ensuring that you experience
              the perfect balance of taste, health, and refreshment.
            </p>
          </motion.div>

          <div className="relative h-[600px]">
            <motion.div
              style={{
                y: y1
              }}
              className="absolute top-0 left-0 w-48 md:w-64">
              
              <img
                src="/sarg_7-Photoroom.png"
                alt="Avina Orange Juice"
                className="w-full drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(255, 140, 66, 0.5))'
                }} />
              
            </motion.div>

            <motion.div
              style={{
                y: y2
              }}
              className="absolute top-32 right-0 w-56 md:w-72">
              
              <img
                src="/Sarg_Water.png"
                alt="Avina Table Water"
                className="w-full drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(79, 195, 224, 0.6))'
                }} />
              
            </motion.div>

            <motion.div
              style={{
                y: y3
              }}
              className="absolute bottom-0 left-1/4 w-44 md:w-56">
              
              <img
                src="/Sarg_6-Photoroom.png"
                alt="Avina Almond Milk"
                className="w-full drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(76, 175, 80, 0.5))'
                }} />
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}