import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Food Critic, Gourmet Magazine',
    content: 'LUMIÈRE redefines fine dining. Every dish is a masterpiece, balancing tradition with innovation in ways that surprise and delight. An absolute must-visit.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Corporate Executive',
    content: 'The perfect venue for important business dinners. Impeccable service, exquisite cuisine, and an atmosphere that impresses every single time.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Lifestyle Blogger',
    content: 'From the moment you enter, you know you\'re somewhere special. The attention to detail, the flavors, the presentation - everything is extraordinary.',
    rating: 5,
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

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
          <p className="text-gold font-inter text-sm tracking-widest uppercase">What They Say</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-cream">
            Guest Experiences
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-gold" />
            <Quote className="text-gold" size={20} />
            <div className="h-px w-16 bg-gold" />
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-charcoal p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-gold/20" size={48} />

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-gold fill-gold" size={18} />
                ))}
              </div>

              {/* Content */}
              <p className="text-cream/80 font-inter leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gold/20 pt-4">
                <p className="font-display text-lg font-semibold text-cream">
                  {testimonial.name}
                </p>
                <p className="text-gold/70 font-inter text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 space-y-4"
        >
          <div className="flex items-center justify-center space-x-2">
            <Star className="text-gold fill-gold" size={32} />
            <span className="font-display text-5xl font-bold text-gold">4.9</span>
            <span className="text-cream/60 font-inter text-lg">/ 5.0</span>
          </div>
          <p className="text-cream/60 font-inter text-sm">
            Based on 1,247 verified reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
