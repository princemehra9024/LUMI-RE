import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Wine, Sparkles, Calendar } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface ExperienceProps {
  onNavigate: (page: 'reservations') => void;
}

export function Experience({ onNavigate }: ExperienceProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const experiences = [
    {
      icon: Users,
      title: 'Private Dining',
      description: 'Exclusive private rooms for intimate gatherings up to 20 guests',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80',
    },
    {
      icon: Sparkles,
      title: "Chef's Table",
      description: 'Front-row seats to culinary artistry with personalized tasting menu',
      image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&q=80',
    },
    {
      icon: Wine,
      title: 'Wine Pairing',
      description: 'Curated wine selections from our 500+ bottle collection',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-gold font-inter text-sm tracking-widest uppercase">Exclusive Offerings</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-cream">
            Curated Experiences
          </h2>
          <p className="text-cream/70 font-inter text-lg max-w-2xl mx-auto">
            Elevate your dining with bespoke experiences designed for the discerning palate
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-black"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <SafeImage
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <exp.icon className="text-gold" size={40} />
                <h3 className="font-display text-2xl font-bold text-cream">{exp.title}</h3>
                <p className="text-cream/70 font-inter leading-relaxed">{exp.description}</p>

                <motion.div
                  className="h-px bg-gold w-0 group-hover:w-16 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            onClick={() => onNavigate('reservations')}
            className="inline-flex items-center space-x-3 px-12 py-5 bg-gold text-black font-inter font-semibold text-sm tracking-wider hover:bg-gold/90 transition-all duration-300 shadow-xl shadow-gold/20"
            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(212, 175, 55, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar size={20} />
            <span>RESERVE YOUR EXPERIENCE</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
