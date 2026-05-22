import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    label: 'Home',
    anchor: 'home'
  },
  {
    label: 'Products',
    anchor: 'products'
  },
  {
    label: 'About',
    anchor: 'about'
  },
  {
    label: 'Contact',
    anchor: 'contact'
  }];

  // On home: anchor links. Off home: navigate to home + hash.
  const linkHref = (anchor: string) => isHome ? `#${anchor}` : `/#${anchor}`;
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-navy/95 backdrop-blur-lg border-b border-aqua/20' : 'bg-transparent'}`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.6
      }}>
      
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Sarg Group home">
          <img
            src="/Sarg_logo.png"
            alt="Sarg Group"
            className="h-12 w-auto" />
          
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.anchor}
            href={linkHref(link.anchor)}
            className="text-ice/80 hover:text-aqua transition-colors duration-200 font-medium">
            
              {link.label}
            </a>
          )}
        </div>

        <div className="hidden md:block">
          <a
            href={linkHref('contact')}
            className="px-6 py-2.5 bg-aqua text-navy font-semibold rounded-full hover:bg-aqua/90 transition-all duration-200 hover:scale-105">
            
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden text-ice"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">
          
          {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </nav>

      {isMobileMenuOpen &&
      <motion.div
        className="md:hidden bg-navy/98 backdrop-blur-lg border-t border-aqua/20"
        initial={{
          opacity: 0,
          height: 0
        }}
        animate={{
          opacity: 1,
          height: 'auto'
        }}
        exit={{
          opacity: 0,
          height: 0
        }}>
        
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) =>
          <a
            key={link.anchor}
            href={linkHref(link.anchor)}
            className="text-ice/80 hover:text-aqua transition-colors duration-200 font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}>
            
                {link.label}
              </a>
          )}
            <a
            href={linkHref('contact')}
            className="px-6 py-2.5 bg-aqua text-navy font-semibold rounded-full hover:bg-aqua/90 transition-all duration-200 text-center mt-2"
            onClick={() => setIsMobileMenuOpen(false)}>
            
              Get in Touch
            </a>
          </div>
        </motion.div>
      }
    </motion.header>);

}