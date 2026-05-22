import React from 'react';
import { motion } from 'framer-motion';
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
            'radial-gradient(circle, rgba(79, 195, 224, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />
        

        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1200 800">
          
          <motion.path
            d="M0,400 Q300,350 600,400 T1200,400"
            stroke="rgba(79, 195, 224, 0.3)"
            strokeWidth="2"
            fill="none"
            initial={{
              pathLength: 0
            }}
            animate={{
              pathLength: 1
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }} />
          
          <motion.path
            d="M0,450 Q300,400 600,450 T1200,450"
            stroke="rgba(79, 195, 224, 0.2)"
            strokeWidth="2"
            fill="none"
            initial={{
              pathLength: 0
            }}
            animate={{
              pathLength: 1
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear'
            }} />
          
        </svg>

        {[...Array(8)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-aqua/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }} />

        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>
          
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}>
            
            Pure Refreshment,{' '}
            <span className="text-aqua">Powered by Nature</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-silver mb-8 leading-relaxed"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.6
            }}>
            
            Discover the Avina range by Sarg Group – hydration, nutrition, and
            taste redefined.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.8
            }}>
            
            <a
              href="#products"
              className="px-8 py-4 bg-aqua text-navy font-semibold rounded-full hover:bg-aqua/90 transition-all duration-200 hover:scale-105 text-center">
              
              Explore Products
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-transparent border-2 border-aqua/50 text-ice font-semibold rounded-full hover:bg-aqua/10 hover:border-aqua transition-all duration-200 backdrop-blur-sm text-center">
              
              Learn More
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            delay: 0.4
          }}>
          
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="relative">
            
            <motion.div
              className="absolute inset-0 blur-3xl opacity-60"
              style={{
                background:
                'radial-gradient(circle, rgba(79, 195, 224, 0.6) 0%, transparent 70%)'
              }}
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }} />
            
            <img
              src="/Sarg_Water.png"
              alt="Avina Table Water"
              className="relative w-full max-w-md mx-auto drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(79, 195, 224, 0.6))'
              }} />
            
          </motion.div>
        </motion.div>
      </div>
    </section>);

}