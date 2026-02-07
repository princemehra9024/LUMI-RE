import { Fragment } from 'react';
import { motion } from 'framer-motion';
import type { GalleryImage } from './types';
import { useInView } from 'react-intersection-observer';

interface BentoGridProps {
  images: GalleryImage[];
  onOpen: (index: number) => void;
}

// Card variant mapping
type Variant = 'hero' | 'standard' | 'vertical' | 'horizontal' | 'small';

function assignVariants(images: GalleryImage[]) {
  // group by category and assign first as hero, then cycle
  const byCategory = new Map<string, GalleryImage[]>();
  images.forEach((img) => {
    const arr = byCategory.get(img.category) || [];
    arr.push(img);
    byCategory.set(img.category, arr);
  });

  const result: { img: GalleryImage; variant: Variant }[] = [];

  for (const [, imgs] of byCategory) {
    imgs.forEach((img, idx) => {
      let variant: Variant = 'small';
      if (idx === 0) variant = 'hero';
      else {
        const cycle = (idx - 1) % 3;
        variant = cycle === 0 ? 'standard' : cycle === 1 ? 'vertical' : 'horizontal';
      }
      result.push({ img, variant });
    });
  }

  // Keep original global order by image id
  result.sort((a, b) => a.img.id - b.img.id);
  return result;
}

export function BentoGrid({ images, onOpen }: BentoGridProps) {
  const assigned = assignVariants(images);
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.96, rotateX: -12, y: 18 },
    show: { opacity: 1, scale: 1, rotateX: 0, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridAutoRows: '8rem',
    gap: '1.25rem',
  };

  const variantSpan = (v: Variant) => {
    switch (v) {
      case 'hero':
        return { gridColumn: 'span 6', gridRow: 'span 3' };
      case 'standard':
        return { gridColumn: 'span 4', gridRow: 'span 2' };
      case 'vertical':
        return { gridColumn: 'span 3', gridRow: 'span 3' };
      case 'horizontal':
        return { gridColumn: 'span 6', gridRow: 'span 2' };
      default:
        return { gridColumn: 'span 3', gridRow: 'span 2' };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={container}
      className="w-full"
    >
      <div style={gridStyle} className="w-full">
        {assigned.map(({ img, variant }, idx) => (
          <motion.button
            key={img.id}
            className="relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            style={{ ...variantSpan(variant) }}
            onClick={() => onOpen(idx)}
            variants={item}
            aria-label={`Open ${img.title ?? img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading={img.priority ? 'eager' : 'lazy'}
              className={`w-full h-full object-cover transition-transform duration-800 will-change-transform group-hover:scale-105`}
              style={{
                filter: inView ? 'none' : 'blur(6px)',
                transformOrigin: 'center',
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute left-4 bottom-4 text-cream">
              <div className="text-xs text-gold font-inter uppercase tracking-widest">{img.category.replace('-', ' ')}</div>
              {img.title && <div className="font-display text-lg font-semibold mt-1">{img.title}</div>}
            </div>

            {/* subtle border on hover */}
            <div className="absolute inset-0 border-2 border-transparent hover:border-gold transition-colors duration-300 rounded-xl pointer-events-none" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
