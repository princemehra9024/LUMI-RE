import { useState } from 'react';
import { Lightbox } from './Gallery/Lightbox';
import type { GalleryImage, Category } from './Gallery/types';
import { SafeImage } from './SafeImage';

const images: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80', alt: 'Wagyu steak plated', category: 'signature', title: "Wagyu Signature" },
  { id: 2, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80', alt: 'Dining room interior', category: 'interior', title: 'The Dining Room' },
  { id: 3, src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600&q=80', alt: 'Fine dining setup', category: 'interior' },
  { id: 4, src: 'https://images.unsplash.com/photo-1551731164-702581673894?w=1600&q=80', alt: 'Seafood dish', category: 'signature' },
  { id: 5, src: 'https://images.unsplash.com/photo-1583394238712-92d1ff9796ad?w=1600&q=80', alt: 'Chef preparing food', category: 'chef' },
  { id: 6, src: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=1600&q=80', alt: 'Gourmet dessert', category: 'signature' },
  { id: 7, src: 'https://images.unsplash.com/photo-1566465559199-50c6d9c81631?w=1600&q=80', alt: 'Chef at work', category: 'chef' },
  { id: 8, src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80', alt: 'Wine collection', category: 'wine' },
  { id: 9, src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80', alt: 'Lobster dish', category: 'signature' },
  { id: 10, src: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?w=1600&q=80', alt: 'Private event setup', category: 'events' },
  { id: 11, src: 'https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=1600&q=80', alt: 'Chef plated dish detail', category: 'behind' },
];

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'signature', label: 'Signature Dishes' },
  { key: 'interior', label: 'Interior & Ambiance' },
  { key: 'chef', label: "Chef's Table" },
  { key: 'wine', label: 'Wine & Beverages' },
  { key: 'events', label: 'Private Events' },
  { key: 'behind', label: 'Behind the Scenes' },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'all' ? images : images.filter((i) => i.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-gold font-inter text-sm tracking-widest uppercase">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mt-2">Visual Journey</h2>
          <p className="text-cream/70 mt-2">A curated selection of dishes, interiors, and chef moments.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveCategory(c.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === c.key ? 'bg-gold text-black' : 'bg-transparent text-cream border border-cream/20'
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, i) => (
            <button key={img.id} onClick={() => openLightbox(i)} className="rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
              <SafeImage src={img.src} alt={img.alt} className="w-full h-64 object-cover sm:h-56 md:h-72 transition-transform duration-500 hover:scale-105" />
            </button>
          ))}
        </div>

        {lightboxIndex !== null && (
          <Lightbox images={filtered} index={lightboxIndex} onClose={closeLightbox} onPrev={prev} onNext={next} />
        )}
      </div>
    </section>
  );
}
