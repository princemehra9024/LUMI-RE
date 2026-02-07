# LUMIÈRE Color Theme - Quick Reference Guide

## 🎨 Quick Start

### 1. Using CSS Classes (Recommended)

```tsx
// Text colors
<h1 className="text-gold">Premium Heading</h1>
<p className="text-cream">Body text on dark background</p>
<span className="text-muted">Secondary information</span>

// Background colors
<div className="bg-pure-black">Main section</div>
<div className="bg-charcoal">Card background</div>
<div className="bg-gold">Premium button</div>

// Gradients
<div className="gold-shimmer">Premium element</div>
<div className="hero-overlay">Hero section overlay</div>
```

### 2. Using TypeScript Constants

```tsx
import { PRIMARY_COLORS, GRADIENTS, COLOR_COMBINATIONS } from '@/utils/colors';

// Inline styles
<div style={{ 
  background: PRIMARY_COLORS.PURE_BLACK,
  color: PRIMARY_COLORS.CREAM_WHITE 
}}>
  Content
</div>

// Gradient backgrounds
<div style={{ background: GRADIENTS.GOLD_SHIMMER }}>
  Premium Button
</div>

// Pre-defined combinations
const heroStyle = {
  background: COLOR_COMBINATIONS.DARK_HERO.background,
  color: COLOR_COMBINATIONS.DARK_HERO.text,
};
```

### 3. Using CSS Variables

```tsx
// Direct CSS variable usage
<div style={{ 
  background: 'var(--color-pure-black)',
  color: 'var(--color-cream)',
  borderColor: 'var(--color-luxury-gold)'
}}>
  Content
</div>
```

---

## 🎯 Common Use Cases

### Hero Section
```tsx
<section className="bg-pure-black text-cream">
  <div className="hero-overlay">
    <h1 className="gold-gradient-text font-display">LUMIÈRE</h1>
    <p className="text-cream">Experience luxury dining</p>
  </div>
</section>
```

### Premium Button
```tsx
<button className="bg-gold text-pure-black hover:bg-dark-gold px-8 py-4 rounded-full">
  Reserve Now
</button>

// Or with gradient
<button className="gold-shimmer text-pure-black px-8 py-4 rounded-full">
  Premium Reservation
</button>
```

### Card Component
```tsx
<div className="bg-rich-black border border-gold rounded-lg p-6">
  <h3 className="text-gold font-display">Menu Item</h3>
  <p className="text-cream">Description</p>
  <span className="text-muted">Additional info</span>
</div>
```

### Navigation Bar
```tsx
<nav className="bg-charcoal text-cream">
  <a href="/" className="nav-link text-cream hover:text-gold">Home</a>
  <a href="/menu" className="nav-link text-gold">Menu</a>
</nav>
```

---

## 📊 Color Palette Cheat Sheet

### Backgrounds
```
Pure Black    #000000  ■  Main backgrounds
Rich Black    #0A0A0A  ■  Cards with depth
Charcoal      #1D1D1F  ■  Navigation, secondary sections
Cream White   #FAFAFA  □  Light backgrounds
```

### Text
```
On Dark       #FAFAFA  □  Primary text on dark
On Light      #000000  ■  Primary text on light
Secondary     #3B3130  ■  Body text, descriptions
Muted         #838181  ■  Captions, metadata
```

### Accents
```
Luxury Gold   #D4AF37  ◆  Primary CTAs, links
Dark Gold     #B69121  ◆  Hover states
Light Gold    #E8D7B5  ◆  Subtle highlights
Bronze        #A57A03  ◆  Premium badges
```

---

## 🎭 Gradient Recipes

### Hero Overlay (Dark to Transparent)
```css
background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
```

### Gold Shimmer (Premium Elements)
```css
background: linear-gradient(135deg, #D4AF37 0%, #B69121 50%, #A57A03 100%);
```

### Dark Elegant (Section Backgrounds)
```css
background: linear-gradient(to right, #000000 0%, #1D1D1F 50%, #000000 100%);
```

### Image Overlay (Bottom to Top)
```css
background: linear-gradient(to top, #000000 0%, transparent 60%);
```

### Gold Text Gradient
```css
background: linear-gradient(90deg, #D4AF37, #E8D7B5 60%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## 🔧 Helper Functions

### RGBA with Opacity
```tsx
import { hexToRgba, PRIMARY_COLORS } from '@/utils/colors';

// Create semi-transparent gold
const goldOverlay = hexToRgba(PRIMARY_COLORS.LUXURY_GOLD, 0.2);

<div style={{ background: goldOverlay }}>
  Semi-transparent gold overlay
</div>
```

---

## ✅ Accessibility Guidelines

### High Contrast Combinations (AAA)
```tsx
// Pure Black on Cream White (19.5:1)
<div className="bg-cream text-pure-black">Highly readable</div>

// Cream White on Pure Black (19.5:1)
<div className="bg-pure-black text-cream">Highly readable</div>
```

### Good Contrast Combinations (AA)
```tsx
// Luxury Gold on Pure Black (4.8:1)
<div className="bg-pure-black text-gold">Good for headings</div>

// Charcoal on Cream White (15.2:1)
<div className="bg-cream text-secondary">Body text</div>
```

### Avoid These Combinations
```tsx
// ❌ Warm Gray on Pure Black (3.2:1) - Too low for body text
// ✅ Use only for large text (18px+) or decorative elements
<div className="bg-pure-black">
  <span className="text-muted text-xl">Large muted text OK</span>
</div>
```

---

## 🎨 Design Patterns

### 1. Luxury Card Pattern
```tsx
<div className="bg-rich-black border border-light-gold rounded-xl p-8 
                hover:border-gold transition-all duration-300">
  <h3 className="text-gold font-display text-3xl mb-4">Title</h3>
  <p className="text-cream leading-relaxed">Content</p>
  <button className="gold-shimmer text-pure-black px-6 py-3 rounded-full mt-6">
    Action
  </button>
</div>
```

### 2. Premium Section Pattern
```tsx
<section className="bg-pure-black py-20">
  <div className="dark-elegant py-16">
    <h2 className="gold-gradient-text font-display text-5xl text-center mb-8">
      Section Title
    </h2>
    <p className="text-cream text-center max-w-2xl mx-auto">
      Description text
    </p>
  </div>
</section>
```

### 3. Interactive Button Pattern
```tsx
<button className="group relative overflow-hidden bg-gold text-pure-black 
                   px-8 py-4 rounded-full transition-all duration-300
                   hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">
  <span className="relative z-10">Reserve Now</span>
  <div className="absolute inset-0 bg-dark-gold transform scale-x-0 
                  group-hover:scale-x-100 transition-transform origin-left" />
</button>
```

---

## 📱 Responsive Considerations

### Mobile-First Approach
```tsx
// Reduce gradient complexity on mobile
<div className="bg-pure-black md:dark-elegant">
  Content
</div>

// Simplify gold effects on mobile
<h1 className="text-gold md:gold-gradient-text">
  Heading
</h1>
```

---

## 🚀 Performance Tips

1. **Use CSS classes over inline styles** for better caching
2. **Prefer CSS variables** for theme consistency
3. **Limit gradient usage** on mobile devices
4. **Use `will-change` sparingly** for animated elements

```tsx
// Good: CSS class
<div className="gold-shimmer">Content</div>

// Avoid: Inline gradient (unless dynamic)
<div style={{ background: 'linear-gradient(...)' }}>Content</div>
```

---

## 📚 Additional Resources

- Full documentation: `COLOR_THEME.md`
- TypeScript constants: `src/utils/colors.ts`
- CSS definitions: `src/index.css`

---

**Last Updated:** February 2026  
**Version:** 1.0.0
