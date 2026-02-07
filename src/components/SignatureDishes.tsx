import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SafeImage } from './SafeImage';

const dishes = [
  {
    id: 1,
    name: 'Seared Wagyu Beef',
    description: 'A5 Wagyu with truffle potato purée, wild mushrooms, and red wine reduction',
    price: '$185',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
  },
  {
    id: 2,
    name: 'Mediterranean Sea Bass',
    description: 'Pan-seared sea bass with saffron risotto, grilled asparagus, and citrus beurre blanc',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1551731164-702581673894?w=800&q=80',
  },
  {
    id: 3,
    name: 'Lobster Thermidor',
    description: 'Butter-poached Maine lobster with cognac cream sauce and herb-crusted fingerlings',
    price: '$145',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  },
  {
    id: 4,
    name: 'Duck à l\'Orange',
    description: 'Roasted duck breast with Grand Marnier orange sauce, seasonal vegetables',
    price: '$110',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&q=80',
  },
];

export function SignatureDishes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-gold font-inter text-sm tracking-widest uppercase">Chef's Selection</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-cream">
            Signature Dishes
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-gold" />
            <Star className="text-gold" size={20} />
            <div className="h-px w-16 bg-gold" />
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <SafeImage
                  src={dishes[currentIndex].image}
                  alt={dishes[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-4 border-gold/20 m-6" />
                <div className="absolute top-6 right-6 bg-gold text-black px-4 py-2 font-display text-xl font-bold">
                  {dishes[currentIndex].price}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Star className="text-gold fill-gold" size={20} />
                  <span className="text-gold font-inter text-sm tracking-wider uppercase">
                    Chef's Recommendation
                  </span>
                </div>

                <h3 className="font-display text-4xl md:text-5xl font-bold text-cream">
                  {dishes[currentIndex].name}
                </h3>

                <p className="text-cream/80 font-inter text-lg leading-relaxed">
                  {dishes[currentIndex].description}
                </p>

                <div className="h-px w-24 bg-gold mx-auto md:mx-0" />

                <div className="flex items-center justify-center md:justify-start space-x-2 text-cream/60 font-inter text-sm">
                  <span>{currentIndex + 1}</span>
                  <span>/</span>
                  <span>{dishes.length}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-gold/10 hover:bg-gold/20 text-gold p-3 rounded-full backdrop-blur-sm transition-all duration-300"
            aria-label="Previous dish"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-gold/10 hover:bg-gold/20 text-gold p-3 rounded-full backdrop-blur-sm transition-all duration-300"
            aria-label="Next dish"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-12">
            {dishes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${index === currentIndex
                    ? 'w-12 h-2 bg-gold'
                    : 'w-2 h-2 bg-gold/30 hover:bg-gold/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
