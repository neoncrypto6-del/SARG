import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const statements = [
'Refreshment Redefined',
"Nature's Best",
'Pure Innovation',
'Taste the Future'];

export function ScrollExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  return (
    <section
      ref={ref}
      className="relative h-[150vh] flex items-center justify-center overflow-hidden">
      
      <div className="sticky top-1/2 -translate-y-1/2 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{
                y
              }}
              className="relative">
              
              <motion.div
                style={{
                  rotate,
                  scale
                }}
                className="relative">
                
                <motion.div
                  className="absolute inset-0 blur-3xl opacity-50"
                  style={{
                    background:
                    'radial-gradient(circle, rgba(79, 195, 224, 0.6) 0%, transparent 70%)'
                  }}
                  animate={{
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }} />
                
                <img
                  src="/Sarg_4-Photoroom.png"
                  alt="Avina Plus"
                  className="relative w-full max-w-md mx-auto drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 40px rgba(139, 163, 184, 0.6))'
                  }} />
                
              </motion.div>
            </motion.div>

            <div className="space-y-8">
              {statements.map((statement, index) =>
              <motion.div
                key={statement}
                initial={{
                  opacity: 0,
                  x: 50
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true,
                  margin: '-100px'
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2
                }}
                className="relative">
                
                  <motion.div
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-0 bg-aqua"
                  whileInView={{
                    height: '100%'
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.3
                  }} />
                
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-ice/90">
                    {statement}
                  </h3>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none">
        
        <motion.path
          d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="rgba(14, 58, 122, 0.3)"
          initial={{
            pathLength: 0
          }}
          whileInView={{
            pathLength: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 2
          }} />
        
      </svg>
    </section>);

}