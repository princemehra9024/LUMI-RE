import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  src: string;
  title: string;
  subtitle?: string;
  layout?: 'left' | 'right' | 'full' | 'split';
}

const slides: Slide[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1543353071-087092ec393e?w=1600&q=80',
    title: "Chef's Signature",
    subtitle: 'A moment of crafted perfection — taste the legacy',
    layout: 'left',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1604908177522-3b24d5f8a7c3?w=1600&q=80',
    title: 'Ocean Harvest',
    subtitle: 'Sourced daily, plated with poetry',
    layout: 'full',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1543353071-2b8b8f4f6f7e?w=1600&q=80',
    title: 'The Dining Room',
    subtitle: 'Atmosphere that frames every course',
    layout: 'right',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=80',
    title: 'Seasonal Story',
    subtitle: 'Menus that change with the rhythm of nature',
    layout: 'split',
  },
];

export function CinematicShowcase() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isPaused]);

  useEffect(() => {
    // cleanup on unmount
    return () => { if (timerRef.current) window.clearInterval(timerRef.current); };
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gold font-inter text-sm tracking-widest uppercase">Featured</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Cinematic Showcase</h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="previous"
              onClick={prev}
              className="p-2 rounded-full bg-charcoal/70 text-gold hover:bg-charcoal"
            >
              <ChevronLeft />
            </button>
            <button
              aria-label="pause"
              onClick={() => setIsPaused((s) => !s)}
              className="px-3 py-2 rounded-md bg-charcoal/60 text-cream hover:bg-charcoal"
            >
              {isPaused ? 'Resume' : 'Pause'}
            </button>
            <button
              aria-label="next"
              onClick={next}
              className="p-2 rounded-full bg-charcoal/70 text-gold hover:bg-charcoal"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Letterbox bars */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-black/80" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-black/80" />

          <AnimatePresence mode="wait">
            {slides.map((slide, i) =>
              i === index ? (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.9 }}
                  className="absolute inset-0 bg-black"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                      src={slide.src}
                      alt={slide.title}
                      className={`w-full h-full object-cover transition-transform duration-1200 will-change-transform ${slide.layout === 'full' ? 'object-center' : slide.layout === 'left' ? 'object-left' : slide.layout === 'right' ? 'object-right' : 'object-center'} `}
                      initial={{ scale: 1.08 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 8, ease: 'easeInOut' }}
                    />

                    {/* Grain overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0),rgba(0,0,0,0.25))]" />
                  </div>

                  {/* Slide content - different positioning per layout */}
                  <div className="absolute inset-0 z-10 flex items-center">
                    {slide.layout === 'left' && (
                      <div className="max-w-2xl ml-12 py-12">
                        <motion.h3 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-6xl text-gold font-bold tracking-tight">
                          {slide.title}
                        </motion.h3>
                        <motion.p initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="mt-4 text-cream max-w-xl">
                          {slide.subtitle}
                        </motion.p>
                      </div>
                    )}

                    {slide.layout === 'right' && (
                      <div className="ml-auto max-w-2xl mr-12 py-12 text-right">
                        <motion.h3 initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-6xl text-gold font-bold tracking-tight">
                          {slide.title}
                        </motion.h3>
                        <motion.p initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="mt-4 text-cream max-w-xl ml-auto">
                          {slide.subtitle}
                        </motion.p>
                      </div>
                    )}

                    {slide.layout === 'full' && (
                      <div className="mx-auto text-center py-12 px-6">
                        <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-6xl text-gold font-bold tracking-tight">
                          {slide.title}
                        </motion.h3>
                        <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="mt-4 text-cream max-w-2xl mx-auto">
                          {slide.subtitle}
                        </motion.p>
                      </div>
                    )}

                    {slide.layout === 'split' && (
                      <div className="grid grid-cols-2 w-full">
                        <div className="p-12">
                          <motion.h3 initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="font-display text-3xl md:text-5xl text-gold font-bold tracking-tight">
                            {slide.title}
                          </motion.h3>
                          <motion.p initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="mt-4 text-cream max-w-md">
                            {slide.subtitle}
                          </motion.p>
                        </div>
                        <div className="p-12 flex items-end justify-end">
                          <div className="w-56 h-56 bg-black/30 border-2 border-gold rounded-lg overflow-hidden">
                            <img src={slide.src} alt="detail" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : null,
            )}
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-3 z-20">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? 'bg-gold' : 'bg-cream/30'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
