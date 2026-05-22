import React from 'react';
import { motion } from 'framer-motion';
import { LeafIcon, SparklesIcon, HeartIcon, FactoryIcon } from 'lucide-react';
const benefits = [
{
  icon: LeafIcon,
  title: '100% Quality Ingredients',
  description: 'Only the finest natural ingredients in every bottle'
},
{
  icon: SparklesIcon,
  title: 'Refreshing Taste',
  description: 'Perfectly balanced flavors that delight your senses'
},
{
  icon: HeartIcon,
  title: 'Healthy Lifestyle',
  description: 'Nutrition and wellness in every sip'
},
{
  icon: FactoryIcon,
  title: 'Advanced Production',
  description: 'State-of-the-art facilities ensuring excellence'
}];

export function Benefits() {
  return (
    <section className="relative py-24 px-6">
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
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-aqua">Avina</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{
                  opacity: 0,
                  y: 50
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                whileHover={{
                  y: -10
                }}
                className="relative group">
                
                <div className="bg-navy/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-aqua/30 transition-all duration-300 h-full">
                  <motion.div
                    className="relative mb-6"
                    whileHover={{
                      scale: 1.1
                    }}>
                    
                    <motion.div
                      className="absolute inset-0 bg-aqua/20 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }} />
                    
                    <div className="relative w-16 h-16 bg-aqua/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-aqua" />
                    </div>
                  </motion.div>

                  <h3 className="font-display text-xl font-semibold mb-3 text-ice">
                    {benefit.title}
                  </h3>
                  <p className="text-silver/80 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}