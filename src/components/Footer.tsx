import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'menu' | 'reservations' | 'gallery' | 'contact') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: 'home' | 'menu' | 'reservations' | 'gallery' | 'contact') => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-4xl font-bold text-gold tracking-wider">
              LUMIÈRE
            </h3>
            <p className="text-cream/70 font-inter text-sm leading-relaxed">
              Heritage cuisine meets modern mastery in an unforgettable dining experience.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gold hover:text-gold/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gold hover:text-gold/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gold hover:text-gold/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-xl font-semibold text-gold">Quick Links</h4>
            <ul className="space-y-2 font-inter text-sm">
              {[
                { label: 'Home', page: 'home' as const },
                { label: 'Menu', page: 'menu' as const },
                { label: 'Reservations', page: 'reservations' as const },
                { label: 'Gallery', page: 'gallery' as const },
                { label: 'Contact', page: 'contact' as const },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavigate(link.page)}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-xl font-semibold text-gold">Contact</h4>
            <ul className="space-y-3 font-inter text-sm">
              <li className="flex items-start space-x-3 text-cream/70">
                <MapPin className="text-gold mt-0.5 flex-shrink-0" size={18} />
                <span>123 Gourmet Avenue<br />New York, NY 10013</span>
              </li>
              <li className="flex items-center space-x-3 text-cream/70">
                <Phone className="text-gold flex-shrink-0" size={18} />
                <a href="tel:+15551234567" className="hover:text-gold transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3 text-cream/70">
                <Mail className="text-gold flex-shrink-0" size={18} />
                <a href="mailto:info@lumiere.com" className="hover:text-gold transition-colors">
                  info@lumiere.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display text-xl font-semibold text-gold">Newsletter</h4>
            <p className="text-primary/70 font-inter text-sm">
              Subscribe for exclusive offers and culinary insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-black border border-gold/30 px-4 py-2 text-cream font-inter text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <motion.button
                type="submit"
                className="w-full bg-gold text-black font-inter font-semibold text-sm py-2 hover:bg-gold/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SUBSCRIBE
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 font-inter text-sm">
              © {new Date().getFullYear()} LUMIÈRE Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6 font-inter text-sm">
              <button className="text-cream/60 hover:text-gold transition-colors">
                Privacy Policy
              </button>
              <button className="text-cream/60 hover:text-gold transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
