import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  currentPage: 'home' | 'menu' | 'reservations' | 'gallery' | 'contact';
  onNavigate: (page: 'home' | 'menu' | 'reservations' | 'gallery' | 'contact') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home' as const, label: 'HOME' },
    { id: 'menu' as const, label: 'MENU' },
    { id: 'reservations' as const, label: 'RESERVATIONS' },
    { id: 'gallery' as const, label: 'GALLERY' },
    { id: 'contact' as const, label: 'CONTACT' },
  ];

  const handleNavClick = (page: typeof currentPage) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`} 
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick('home')}
              className="font-display text-3xl sm:text-4xl font-bold gold-gradient-text tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go home"
            >
              <span className="sr-only">Lumiere</span>
              <span className="leading-none">LUMIÈRE</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center relative space-x-4">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-link font-inter text-sm font-medium tracking-wide ${
                      currentPage === item.id ? 'text-gold' : 'text-cream hover:text-gold'
                    }`} 
                  >
                    <span>{item.label}</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gold p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-lg md:hidden" 
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-display text-3xl font-semibold transition-colors duration-300 ${
                    currentPage === item.id ? 'text-gold' : 'text-cream hover:text-gold'
                  }`} 
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
