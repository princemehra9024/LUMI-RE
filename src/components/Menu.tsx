import { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Star, ChefHat } from 'lucide-react';

type MenuCategory = 'appetizers' | 'mains' | 'desserts' | 'beverages';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  dietary?: ('vegetarian' | 'vegan' | 'gluten-free')[];
  chefRecommended?: boolean;
  seasonal?: boolean;
}

const menuData: Record<MenuCategory, MenuItem[]> = {
  appetizers: [
    {
      name: 'Foie Gras Terrine',
      description: 'House-cured foie gras with fig compote, brioche, and aged balsamic',
      price: '$38',
      chefRecommended: true,
    },
    {
      name: 'Oysters Rockefeller',
      description: 'Fresh Pacific oysters with spinach, Pernod, and Parmesan gratinée',
      price: '$32',
    },
    {
      name: 'Burrata & Heirloom Tomatoes',
      description: 'Creamy burrata, heritage tomatoes, basil oil, and aged balsamic',
      price: '$26',
      dietary: ['vegetarian'],
      seasonal: true,
    },
    {
      name: 'Scallop Carpaccio',
      description: 'Thinly sliced scallops, yuzu, micro cilantro, and caviar',
      price: '$42',
    },
  ],
  mains: [
    {
      name: 'Wagyu Beef Tenderloin',
      description: 'A5 Japanese Wagyu, truffle potato purée, wild mushrooms, red wine jus',
      price: '$185',
      chefRecommended: true,
    },
    {
      name: 'Chilean Sea Bass',
      description: 'Miso-glazed sea bass, soba noodles, bok choy, dashi broth',
      price: '$78',
    },
    {
      name: 'Duck Breast à l\'Orange',
      description: 'Roasted duck breast, Grand Marnier sauce, seasonal vegetables',
      price: '$68',
      chefRecommended: true,
    },
    {
      name: 'Lobster Thermidor',
      description: 'Butter-poached Maine lobster, cognac cream, herb fingerlings',
      price: '$145',
    },
    {
      name: 'Wild Mushroom Risotto',
      description: 'Arborio rice, porcini, truffle oil, Parmigiano-Reggiano',
      price: '$48',
      dietary: ['vegetarian', 'gluten-free'],
      seasonal: true,
    },
  ],
  desserts: [
    {
      name: 'Chocolate Soufflé',
      description: 'Dark chocolate soufflé with vanilla bean ice cream and raspberry coulis',
      price: '$22',
      chefRecommended: true,
    },
    {
      name: 'Crème Brûlée',
      description: 'Classic vanilla bean custard with caramelized sugar crust',
      price: '$18',
    },
    {
      name: 'Tarte Tatin',
      description: 'Caramelized apple tart with Calvados and crème fraîche',
      price: '$20',
      seasonal: true,
    },
    {
      name: 'Seasonal Sorbet Trio',
      description: 'Chef\'s selection of house-made sorbets',
      price: '$16',
      dietary: ['vegan', 'gluten-free'],
    },
  ],
  beverages: [
    {
      name: 'Dom Pérignon 2012',
      description: 'Vintage champagne with notes of white fruit and toasted brioche',
      price: '$450',
    },
    {
      name: 'Château Margaux 2015',
      description: 'Premier Grand Cru Classé, Bordeaux blend',
      price: '$850',
      chefRecommended: true,
    },
    {
      name: 'Opus One 2018',
      description: 'Napa Valley Bordeaux blend, rich and complex',
      price: '$425',
    },
    {
      name: 'Artisanal Cocktails',
      description: 'Handcrafted cocktails using premium spirits and fresh ingredients',
      price: '$24',
    },
  ],
};

const categories = [
  { id: 'appetizers' as const, label: 'Appetizers' },
  { id: 'mains' as const, label: 'Main Courses' },
  { id: 'desserts' as const, label: 'Desserts' },
  { id: 'beverages' as const, label: 'Beverages' },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('appetizers');

  return (
    <section className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-gold font-inter text-sm tracking-widest uppercase">Our Menu</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream">
            Culinary Artistry
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-gold" />
            <ChefHat className="text-gold" size={24} />
            <div className="h-px w-16 bg-gold" />
          </div>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 font-inter font-medium text-sm tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold text-black'
                  : 'bg-charcoal text-cream hover:bg-gold/20 hover:text-gold'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {menuData[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gold/20 pb-8 last:border-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 space-y-3">
                  {/* Name and Badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-cream">
                      {item.name}
                    </h3>
                    {item.chefRecommended && (
                      <div className="flex items-center space-x-1 bg-gold/20 px-3 py-1 rounded-full">
                        <Star className="text-gold fill-gold" size={14} />
                        <span className="text-gold text-xs font-inter font-medium">
                          Chef's Pick
                        </span>
                      </div>
                    )}
                    {item.seasonal && (
                      <div className="flex items-center space-x-1 bg-green-900/30 px-3 py-1 rounded-full">
                        <Leaf className="text-green-400" size={14} />
                        <span className="text-green-400 text-xs font-inter font-medium">
                          Seasonal
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-cream/70 font-inter leading-relaxed">
                    {item.description}
                  </p>

                  {/* Dietary Info */}
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.dietary.map((diet) => (
                        <span
                          key={diet}
                          className="text-xs font-inter text-gold/80 bg-gold/10 px-2 py-1 rounded"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="font-display text-2xl md:text-3xl font-bold text-gold whitespace-nowrap">
                  {item.price}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center space-y-4"
        >
          <div className="h-px w-32 bg-gold/30 mx-auto" />
          <p className="text-cream/60 font-inter text-sm italic">
            *Prices subject to change based on seasonal availability. Please inform your server of any dietary restrictions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
