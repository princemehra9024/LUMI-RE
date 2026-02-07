import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from './types';
import { SafeImage } from '../SafeImage';

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, []);

  if (index < 0 || index >= images.length) return null;

  const img = images[index];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <motion.button
          aria-label="Close"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-6 right-6 text-gold p-2 rounded-full bg-black/40 hover:bg-black/60"
        >
          <X size={28} />
        </motion.button>

        <motion.button
          aria-label="Previous image"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-6 text-gold p-2 rounded-full bg-black/40 hover:bg-black/60"
        >
          <ChevronLeft size={36} />
        </motion.button>

        <motion.button
          aria-label="Next image"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-6 text-gold p-2 rounded-full bg-black/40 hover:bg-black/60"
        >
          <ChevronRight size={36} />
        </motion.button>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="max-w-[90vw] max-h-[85vh] w-full bg-black rounded-md overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          ref={ref}
        >
          <SafeImage src={img.src} alt={img.alt} className="w-full h-full object-contain max-h-[85vh]" />

          <div className="absolute left-1/2 -translate-x-1/2 top-6 text-cream text-sm font-inter">
            {index + 1} / {images.length}
          </div>

          <div className="absolute left-6 bottom-6 text-cream">
            <div className="text-gold text-xs uppercase font-inter tracking-widest">{img.category.replace('-', ' ')}</div>
            {img.title && <div className="font-display text-lg mt-1">{img.title}</div>}
          </div>

          {/* Thumbnail strip */}
          <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex gap-3 overflow-x-auto">
              {images.map((thumb, i) => (
                <button
                  key={thumb.id}
                  onClick={(e) => { e.stopPropagation(); /* handled by parent via onNext/onPrev if needed */ }}
                  className={`w-20 h-12 rounded-md overflow-hidden border-2 ${i === index ? 'border-gold' : 'border-transparent'}`}
                >
                  <SafeImage src={thumb.src} alt={thumb.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
