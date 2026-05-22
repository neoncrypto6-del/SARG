import React, { useState } from 'react';
import { motion } from 'framer-motion';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        country: '',
        message: ''
      });
    }, 3000);
  };
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
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
            Partner with <span className="text-aqua">Sarg Group</span>
          </h2>
          <p className="text-silver/80 text-lg">
            Become a distributor and bring premium beverages to your market
          </p>
        </motion.div>

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
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="relative">
          
          <div className="bg-navy/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            {isSubmitted ?
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              className="text-center py-12">
              
                <motion.div
                initial={{
                  scale: 0
                }}
                animate={{
                  scale: 1
                }}
                transition={{
                  type: 'spring',
                  duration: 0.6
                }}
                className="w-20 h-20 bg-aqua/20 rounded-full flex items-center justify-center mx-auto mb-6">
                
                  <svg
                  className="w-10 h-10 text-aqua"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7" />
                  
                  </svg>
                </motion.div>
                <h3 className="font-display text-2xl font-bold mb-2">
                  Thank You!
                </h3>
                <p className="text-silver/80">We'll get back to you shortly.</p>
              </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-silver">
                    
                      Name *
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy/60 border border-white/10 rounded-xl text-ice placeholder-silver/50 focus:outline-none focus:border-aqua/50 transition-colors"
                    placeholder="Your name" />
                  
                  </div>
                  <div>
                    <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2 text-silver">
                    
                      Company *
                    </label>
                    <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy/60 border border-white/10 rounded-xl text-ice placeholder-silver/50 focus:outline-none focus:border-aqua/50 transition-colors"
                    placeholder="Company name" />
                  
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-silver">
                    
                      Email *
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy/60 border border-white/10 rounded-xl text-ice placeholder-silver/50 focus:outline-none focus:border-aqua/50 transition-colors"
                    placeholder="your@email.com" />
                  
                  </div>
                  <div>
                    <label
                    htmlFor="country"
                    className="block text-sm font-medium mb-2 text-silver">
                    
                      Country *
                    </label>
                    <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy/60 border border-white/10 rounded-xl text-ice placeholder-silver/50 focus:outline-none focus:border-aqua/50 transition-colors"
                    placeholder="Your country" />
                  
                  </div>
                </div>

                <div>
                  <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-silver">
                  
                    Message *
                  </label>
                  <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-navy/60 border border-white/10 rounded-xl text-ice placeholder-silver/50 focus:outline-none focus:border-aqua/50 transition-colors resize-none"
                  placeholder="Tell us about your distribution needs..." />
                
                </div>

                <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                className="w-full px-8 py-4 bg-aqua text-navy font-semibold rounded-full hover:bg-aqua/90 transition-all duration-200">
                
                  Send Message
                </motion.button>
              </form>
            }
          </div>
        </motion.div>
      </div>
    </section>);

}