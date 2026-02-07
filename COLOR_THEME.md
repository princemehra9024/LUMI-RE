# LUMIÈRE Restaurant Color Theme

Complete color palette with exact hex codes for the Next.js + TypeScript luxury restaurant website.

---

## Primary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Pure Black** | `#000000` | `rgb(0, 0, 0)` | Main backgrounds, primary text, logo |
| **Luxury Gold** | `#D4AF37` | `rgb(212, 175, 55)` | Primary CTAs, accents, hover states, borders |
| **Cream White** | `#FAFAFA` | `rgb(250, 250, 250)` | Body backgrounds, text on dark surfaces |

### CSS Variables
```css
--color-pure-black: #000000;
--color-luxury-gold: #D4AF37;
--color-cream: #FAFAFA;
```

---

## Secondary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Rich Black** | `#0A0A0A` | `rgb(10, 10, 10)` | Card backgrounds, sections with depth |
| **Charcoal** | `#1D1D1F` | `rgb(29, 29, 31)` | Secondary backgrounds, navbar |
| **Dark Gold** | `#B69121` | `rgb(182, 145, 33)` | Hover states, darker gold accents |
| **Light Gold** | `#E8D7B5` | `rgb(232, 215, 181)` | Subtle highlights, dividers, borders |

### CSS Variables
```css
--color-rich-black: #0A0A0A;
--color-charcoal: #1D1D1F;
--color-dark-gold: #B69121;
--color-light-gold: #E8D7B5;
```

---

## Accent & Utility Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Bronze** | `#A57A03` | `rgb(165, 122, 3)` | Success states, premium badges |
| **Warm Gray** | `#838181` | `rgb(131, 129, 129)` | Disabled states, secondary text |
| **Off-White** | `#F5F5DC` | `rgb(245, 245, 220)` | Alternative light background, cards |
| **Deep Burgundy** | `#400128` | `rgb(64, 1, 40)` | Optional accent for wine/premium sections |

### CSS Variables
```css
--color-bronze: #A57A03;
--color-warm-gray: #838181;
--color-off-white: #F5F5DC;
--color-deep-burgundy: #400128;
```

---

## Text Colors

| Purpose | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| **Primary Text** | Pure Black | `#000000` | Headings, important content on light backgrounds |
| **Secondary Text** | Charcoal | `#3B3130` | Body text, descriptions |
| **Text on Dark** | Cream White | `#FAFAFA` | Text over black/dark backgrounds |
| **Accent Text** | Luxury Gold | `#D4AF37` | Links, highlighted text, prices |
| **Muted Text** | Warm Gray | `#838181` | Captions, timestamps, metadata |

### CSS Variables
```css
--color-text-primary: #000000;
--color-text-secondary: #3B3130;
--color-text-on-dark: var(--color-cream);
--color-muted: var(--color-warm-gray);
```

---

## Gradient Combinations

### Hero Overlay
```css
background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
```
**Usage:** Hero sections, image overlays for readability

### Gold Shimmer
```css
background: linear-gradient(135deg, #D4AF37 0%, #B69121 50%, #A57A03 100%);
```
**Usage:** Premium buttons, accent elements, decorative borders

### Dark Elegant
```css
background: linear-gradient(to right, #000000 0%, #1D1D1F 50%, #000000 100%);
```
**Usage:** Section backgrounds, card backgrounds with depth

### Image Overlay
```css
background: linear-gradient(to top, #000000 0%, transparent 60%);
```
**Usage:** Bottom-to-top overlays on images for text readability

### Gold Text Gradient
```css
background: linear-gradient(90deg, #D4AF37, #E8D7B5 60%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```
**Usage:** Premium headings, featured text, luxury branding

---

## Utility Classes

### Text Colors
```css
.text-gold          /* Luxury Gold */
.text-cream         /* Cream White */
.text-muted         /* Warm Gray */
.text-primary       /* Pure Black */
.text-secondary     /* Charcoal */
.text-bronze        /* Bronze */
.text-burgundy      /* Deep Burgundy */
```

### Background Colors
```css
.bg-gold            /* Luxury Gold */
.bg-gold-light      /* Light Gold */
.bg-cream           /* Cream White */
.bg-rich-black      /* Rich Black */
.bg-pure-black      /* Pure Black */
.bg-charcoal        /* Charcoal */
```

### Border Colors
```css
.border-gold        /* Luxury Gold border */
```

### Hover States
```css
.hover:text-gold:hover    /* Gold text on hover */
.hover:bg-gold:hover      /* Gold background on hover */
```

### Gradient Classes
```css
.hero-overlay       /* Hero overlay gradient */
.gold-shimmer       /* Gold shimmer gradient */
.dark-elegant       /* Dark elegant gradient */
.image-overlay      /* Image overlay gradient */
.gold-gradient-text /* Gold text gradient */
```

---

## Color Accessibility

### Contrast Ratios (WCAG AA Compliance)

| Foreground | Background | Ratio | Pass |
|------------|------------|-------|------|
| Pure Black | Cream White | 19.5:1 | ✅ AAA |
| Luxury Gold | Pure Black | 4.8:1 | ✅ AA |
| Cream White | Pure Black | 19.5:1 | ✅ AAA |
| Charcoal | Cream White | 15.2:1 | ✅ AAA |
| Warm Gray | Pure Black | 3.2:1 | ⚠️ Large text only |

---

## Usage Guidelines

### 1. **Backgrounds**
- **Main backgrounds:** Use `#000000` (Pure Black)
- **Card/Section backgrounds:** Use `#0A0A0A` (Rich Black) or `#1D1D1F` (Charcoal)
- **Light backgrounds:** Use `#FAFAFA` (Cream) or `#F5F5DC` (Off-White)

### 2. **Text**
- **On dark backgrounds:** Use `#FAFAFA` (Cream White)
- **On light backgrounds:** Use `#000000` (Pure Black) or `#3B3130` (Charcoal)
- **Accent/Links:** Use `#D4AF37` (Luxury Gold)
- **Muted/Secondary:** Use `#838181` (Warm Gray)

### 3. **Interactive Elements**
- **Primary CTAs:** `#D4AF37` (Luxury Gold) background with `#000000` (Pure Black) text
- **Hover states:** Transition to `#B69121` (Dark Gold)
- **Borders:** Use `#D4AF37` (Luxury Gold) or `#E8D7B5` (Light Gold)

### 4. **Special Accents**
- **Premium badges:** Use `#A57A03` (Bronze)
- **Wine sections:** Use `#400128` (Deep Burgundy)
- **Dividers:** Use `#E8D7B5` (Light Gold) with low opacity

---

## TypeScript/React Usage

### Importing Colors
```typescript
// Colors are available via CSS variables
const styles = {
  background: 'var(--color-pure-black)',
  color: 'var(--color-cream)',
  borderColor: 'var(--color-luxury-gold)'
};
```

### Tailwind CSS (if configured)
```tsx
<div className="bg-pure-black text-cream border-gold">
  <h1 className="text-gold">LUMIÈRE</h1>
</div>
```

### Inline Styles
```tsx
<div style={{ 
  background: 'linear-gradient(135deg, #D4AF37 0%, #B69121 50%, #A57A03 100%)',
  color: '#FAFAFA'
}}>
  Premium Content
</div>
```

---

## Design Principles

1. **Luxury First:** Gold accents should be used sparingly to maintain premium feel
2. **High Contrast:** Ensure text is always readable with proper contrast ratios
3. **Consistency:** Use CSS variables throughout for easy theme updates
4. **Depth:** Layer Rich Black and Charcoal for visual hierarchy
5. **Elegance:** Prefer subtle gradients over solid colors for premium elements

---

## Quick Reference

```css
/* Most Common Combinations */

/* Dark Hero Section */
background: #000000;
color: #FAFAFA;
accent: #D4AF37;

/* Light Card */
background: #FAFAFA;
color: #000000;
border: #D4AF37;

/* Premium Button */
background: linear-gradient(135deg, #D4AF37 0%, #B69121 50%, #A57A03 100%);
color: #000000;
hover: #B69121;

/* Navigation */
background: #1D1D1F;
color: #FAFAFA;
active: #D4AF37;
```

---

**Last Updated:** February 2026  
**Project:** LUMIÈRE Luxury Restaurant Website  
**Framework:** Next.js + TypeScript + Vite
