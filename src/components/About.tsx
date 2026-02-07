import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Heart, Leaf } from 'lucide-react';
import { SafeImage } from './SafeImage';

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <SafeImage
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&q=80"
                alt="Chef preparing fine cuisine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-gold/30 m-4" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <p className="text-gold font-inter text-sm tracking-widest uppercase">Our Story</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
                A Culinary Journey Through Time
              </h2>
            </div>

            <div className="h-px w-24 bg-gold" />

            <div className="space-y-4 text-cream/80 font-inter leading-relaxed">
              <p>
                At LUMIÈRE, we believe that exceptional dining is an art form that transcends mere
                sustenance. Our philosophy intertwines centuries-old culinary traditions with
                innovative modern techniques, creating an experience that honors the past while
                embracing the future.
              </p>
              <p>
                Under the guidance of our award-winning Chef Jean-Baptiste Moreau, each dish tells
                a story of passion, precision, and the relentless pursuit of perfection. We source
                only the finest seasonal ingredients from local artisans and sustainable farms,
                ensuring every plate reflects our commitment to quality and authenticity.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center space-y-2">
                <Award className="text-gold mx-auto" size={32} />
                <p className="text-cream/80 text-sm font-inter">Michelin Starred</p>
              </div>
              <div className="text-center space-y-2">
                <Heart className="text-gold mx-auto" size={32} />
                <p className="text-cream/80 text-sm font-inter">Crafted with Love</p>
              </div>
              <div className="text-center space-y-2">
                <Leaf className="text-gold mx-auto" size={32} />
                <p className="text-cream/80 text-sm font-inter">Sustainable</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
