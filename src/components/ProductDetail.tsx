import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  CheckCircle2Icon,
  SparklesIcon,
  LeafIcon,
  ShieldCheckIcon,
  ChevronRightIcon } from
'lucide-react';
import { products } from '../data/products';
export function ProductDetail() {
  const { id } = useParams<{
    id: string;
  }>();
  const product = products.find((p) => p.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (!product) {
    return <Navigate to="/" replace />;
  }
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
  return (
    <main className="relative pt-28 pb-24">
      {/* Breadcrumb / Back */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-silver/70 hover:text-aqua transition-colors text-sm font-medium">
          
          <ArrowLeftIcon size={16} />
          Back to Avina Range
        </Link>
      </div>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bottle */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8
            }}
            className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            
            <motion.div
              className="absolute inset-0 blur-3xl opacity-60"
              style={{
                background: `radial-gradient(circle, ${product.glowColor}66 0%, transparent 70%)`
              }}
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }} />
            

            {/* Decorative ring */}
            <motion.div
              className="absolute w-[420px] h-[420px] rounded-full border opacity-20"
              style={{
                borderColor: product.glowColor
              }}
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }} />
            
            <motion.div
              className="absolute w-[320px] h-[320px] rounded-full border opacity-10"
              style={{
                borderColor: product.glowColor
              }}
              animate={{
                rotate: -360
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear'
              }} />
            

            <motion.img
              src={product.image}
              alt={product.name}
              className="relative max-h-full w-auto object-contain z-10"
              style={{
                filter: `drop-shadow(0 0 50px ${product.glowColor}AA)`
              }}
              animate={{
                y: [0, -16, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }} />
            
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}>
            
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-xs font-semibold uppercase tracking-wider"
              style={{
                borderColor: `${product.glowColor}55`,
                backgroundColor: `${product.glowColor}15`,
                color: product.glowColor
              }}>
              
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: product.glowColor
                }} />
              
              {product.category}
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {product.name}
            </h1>

            <p
              className="text-lg md:text-xl font-medium mb-6"
              style={{
                color: product.glowColor
              }}>
              
              {product.tagline}
            </p>

            <p className="text-silver/85 text-base md:text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-silver/70 uppercase tracking-wider mb-3">
                Available Sizes
              </p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) =>
                <span
                  key={size}
                  className="px-4 py-2 rounded-xl bg-navy/60 backdrop-blur-md border border-white/10 text-ice font-medium">
                  
                    {size}
                  </span>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contact"
                className="px-8 py-4 font-semibold rounded-full transition-all duration-200 hover:scale-105 text-center"
                style={{
                  backgroundColor: product.glowColor,
                  color: '#0A1A3A'
                }}>
                
                Become a Distributor
              </Link>
              <Link
                to="/#products"
                className="px-8 py-4 bg-transparent border-2 border-white/20 text-ice font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-200 backdrop-blur-sm text-center">
                
                View All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Long description */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div
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
            duration: 0.7
          }}
          className="bg-navy/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl">
          
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            About {product.shortName}
          </h2>
          <p className="text-silver/85 leading-relaxed text-base md:text-lg">
            {product.longDescription}
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <motion.h2
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="font-display text-3xl md:text-4xl font-bold mb-10">
          
          Key{' '}
          <span
            style={{
              color: product.glowColor
            }}>
            
            Features
          </span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.features.map((feature, i) =>
          <motion.div
            key={feature}
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
              duration: 0.5,
              delay: i * 0.08
            }}
            whileHover={{
              y: -6
            }}
            className="bg-navy/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
            
              <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{
                backgroundColor: `${product.glowColor}20`
              }}>
              
                <CheckCircle2Icon
                size={20}
                style={{
                  color: product.glowColor
                }} />
              
              </div>
              <p className="font-medium text-ice">{feature}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Ingredients + Nutrition */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ingredients */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
            className="bg-navy/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${product.glowColor}20`
                }}>
                
                <LeafIcon
                  size={20}
                  style={{
                    color: product.glowColor
                  }} />
                
              </div>
              <h3 className="font-display text-2xl font-bold">Ingredients</h3>
            </div>
            <ul className="space-y-3">
              {product.ingredients.map((ingredient) =>
              <li
                key={ingredient}
                className="flex items-center gap-3 text-silver/85">
                
                  <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: product.glowColor
                  }} />
                
                  {ingredient}
                </li>
              )}
            </ul>
          </motion.div>

          {/* Nutrition */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
            className="bg-navy/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${product.glowColor}20`
                }}>
                
                <SparklesIcon
                  size={20}
                  style={{
                    color: product.glowColor
                  }} />
                
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">
                  Nutrition Facts
                </h3>
                <p className="text-xs text-silver/60 mt-0.5">
                  Per typical serving
                </p>
              </div>
            </div>
            <div className="divide-y divide-white/10">
              {product.nutrition.map((item) =>
              <div
                key={item.label}
                className="flex items-center justify-between py-3">
                
                  <span className="text-silver/80">{item.label}</span>
                  <span className="font-semibold text-ice">{item.value}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best for */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <motion.div
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
            duration: 0.7
          }}>
          
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: `${product.glowColor}20`
              }}>
              
              <ShieldCheckIcon
                size={20}
                style={{
                  color: product.glowColor
                }} />
              
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Best For
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {product.bestFor.map((item, i) =>
            <motion.span
              key={item}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.05
              }}
              className="px-5 py-2.5 rounded-full bg-navy/60 backdrop-blur-md border text-ice"
              style={{
                borderColor: `${product.glowColor}40`
              }}>
              
                {item}
              </motion.span>
            )}
          </div>
        </motion.div>
      </section>

      {/* Related products */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Explore More
          </h2>
          <Link
            to="/#products"
            className="text-aqua hover:text-aqua/80 transition-colors text-sm font-medium inline-flex items-center gap-1">
            
            View all <ChevronRightIcon size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((rel, i) =>
          <motion.div
            key={rel.id}
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
              duration: 0.5,
              delay: i * 0.08
            }}>
            
              <Link
              to={`/products/${rel.id}`}
              className="block group bg-navy/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: `0 0 30px ${rel.glowColor}15`
              }}>
              
                <div className="relative h-40 mb-4 flex items-center justify-center">
                  <div
                  className="absolute inset-0 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"
                  style={{
                    background: `radial-gradient(circle, ${rel.glowColor}55 0%, transparent 70%)`
                  }} />
                
                  <img
                  src={rel.image}
                  alt={rel.name}
                  className="relative max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  style={{
                    filter: `drop-shadow(0 0 20px ${rel.glowColor}80)`
                  }} />
                
                </div>
                <h4 className="font-display font-semibold text-ice text-sm md:text-base group-hover:text-aqua transition-colors">
                  {rel.shortName}
                </h4>
                <p className="text-xs text-silver/70 mt-1">{rel.tagline}</p>
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </main>);

}