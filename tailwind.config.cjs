/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'gold': 'var(--color-luxury-gold)',
        'gold-light': 'var(--color-light-gold)',
        'cream': 'var(--color-cream)',
        'charcoal': 'var(--color-charcoal)',
        'pure-black': 'var(--color-pure-black)',
        'rich-black': 'var(--color-rich-black)',
        'bronze': 'var(--color-bronze)',
        'burgundy': 'var(--color-deep-burgundy)',
        'warm-gray': 'var(--color-warm-gray)'
      },
      textColor: {
        'gold': 'var(--color-luxury-gold)'
      },
      backgroundImage: theme => ({
        'hero-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
        'gold-shimmer': 'linear-gradient(135deg, var(--color-luxury-gold) 0%, var(--color-dark-gold) 50%, var(--color-bronze) 100%)',
        'dark-elegant': 'linear-gradient(to right, var(--color-pure-black) 0%, var(--color-charcoal) 50%, var(--color-pure-black) 100%)',
        'image-overlay': 'linear-gradient(to top, var(--color-pure-black) 0%, transparent 60%)'
      })
    }
  },
  plugins: [],
};
