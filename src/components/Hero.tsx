import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: 'menu' | 'reservations') => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <motion.div
          initial={{ scale: 1.06, x: 0 }}
          animate={{ scale: [1.06, 1, 1.06], x: [0, -12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80')`,
            transformOrigin: 'center',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="hero-glow" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Main Logo */}
          <motion.h1
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gold tracking-widest"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            LUMIÈRE
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="h-px w-24 bg-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-24 bg-gold" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="font-display text-xl sm:text-2xl md:text-3xl text-cream tracking-wide italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            Heritage Cuisine Meets Modern Mastery
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button
              onClick={() => onNavigate('menu')}
              className="px-10 py-4 bg-gold text-black font-inter font-semibold text-sm tracking-wider hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              EXPLORE MENU
            </motion.button>

            <motion.button
              onClick={() => onNavigate('reservations')}
              className="px-10 py-4 border-2 border-gold text-gold font-inter font-semibold text-sm tracking-wider hover:bg-gold hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              BOOK TABLE
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-gold" size={40} />
      </motion.div>
    </section>
  );
} 
