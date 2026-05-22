import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon } from
'lucide-react';
export function Footer() {
  const socialLinks = [
  {
    icon: FacebookIcon,
    href: '#',
    label: 'Facebook'
  },
  {
    icon: InstagramIcon,
    href: '#',
    label: 'Instagram'
  },
  {
    icon: TwitterIcon,
    href: '#',
    label: 'Twitter'
  },
  {
    icon: LinkedinIcon,
    href: '#',
    label: 'LinkedIn'
  }];

  const navLinks = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'Products',
    href: '#products'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Contact',
    href: '#contact'
  }];

  return (
    <footer className="relative bg-navy/60 backdrop-blur-xl border-t border-aqua/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <img
              src="/Sarg_logo.png"
              alt="Sarg Group"
              className="h-12 w-auto mb-4" />
            
            <p className="text-silver/70 text-sm">
              Premium beverages crafted with innovation and care
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-ice">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {navLinks.map((link) =>
              <a
                key={link.href}
                href={link.href}
                className="block text-silver/70 hover:text-aqua transition-colors duration-200 text-sm">
                
                  {link.label}
                </a>
              )}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-ice">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-navy/60 rounded-full flex items-center justify-center text-silver/70 hover:text-aqua hover:bg-aqua/10 transition-all duration-200">
                    
                    <Icon size={18} />
                  </a>);

              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-aqua/10 text-center">
          <p className="text-silver/60 text-sm">
            © {new Date().getFullYear()} Sarg Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}