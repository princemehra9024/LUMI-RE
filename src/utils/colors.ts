/**
 * LUMIÈRE Restaurant Color Theme
 * Complete color palette for the luxury restaurant website
 * 
 * @see COLOR_THEME.md for full documentation
 */

// ============================================================================
// PRIMARY COLORS
// ============================================================================

export const PRIMARY_COLORS = {
  PURE_BLACK: '#000000',
  LUXURY_GOLD: '#D4AF37',
  CREAM_WHITE: '#FAFAFA',
} as const;

// ============================================================================
// SECONDARY COLORS
// ============================================================================

export const SECONDARY_COLORS = {
  RICH_BLACK: '#0A0A0A',
  CHARCOAL: '#1D1D1F',
  DARK_GOLD: '#B69121',
  LIGHT_GOLD: '#E8D7B5',
} as const;

// ============================================================================
// ACCENT & UTILITY COLORS
// ============================================================================

export const ACCENT_COLORS = {
  BRONZE: '#A57A03',
  WARM_GRAY: '#838181',
  OFF_WHITE: '#F5F5DC',
  DEEP_BURGUNDY: '#400128',
} as const;

// ============================================================================
// TEXT COLORS
// ============================================================================

export const TEXT_COLORS = {
  PRIMARY: '#000000',
  SECONDARY: '#3B3130',
  ON_DARK: '#FAFAFA',
  ACCENT: '#D4AF37',
  MUTED: '#838181',
} as const;

// ============================================================================
// GRADIENT DEFINITIONS
// ============================================================================

export const GRADIENTS = {
  HERO_OVERLAY: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
  GOLD_SHIMMER: 'linear-gradient(135deg, #D4AF37 0%, #B69121 50%, #A57A03 100%)',
  DARK_ELEGANT: 'linear-gradient(to right, #000000 0%, #1D1D1F 50%, #000000 100%)',
  IMAGE_OVERLAY: 'linear-gradient(to top, #000000 0%, transparent 60%)',
  GOLD_TEXT: 'linear-gradient(90deg, #D4AF37, #E8D7B5 60%)',
} as const;

// ============================================================================
// CSS VARIABLE NAMES
// ============================================================================

export const CSS_VARS = {
  // Primary
  PURE_BLACK: 'var(--color-pure-black)',
  LUXURY_GOLD: 'var(--color-luxury-gold)',
  CREAM: 'var(--color-cream)',
  
  // Secondary
  RICH_BLACK: 'var(--color-rich-black)',
  CHARCOAL: 'var(--color-charcoal)',
  DARK_GOLD: 'var(--color-dark-gold)',
  LIGHT_GOLD: 'var(--color-light-gold)',
  
  // Accent
  BRONZE: 'var(--color-bronze)',
  WARM_GRAY: 'var(--color-warm-gray)',
  OFF_WHITE: 'var(--color-off-white)',
  DEEP_BURGUNDY: 'var(--color-deep-burgundy)',
  
  // Text
  TEXT_PRIMARY: 'var(--color-text-primary)',
  TEXT_SECONDARY: 'var(--color-text-secondary)',
  TEXT_ON_DARK: 'var(--color-text-on-dark)',
  TEXT_ACCENT: 'var(--color-text-accent)',
  TEXT_MUTED: 'var(--color-muted)',
} as const;

// ============================================================================
// RGBA HELPERS
// ============================================================================

/**
 * Convert hex color to rgba with opacity
 * @param hex - Hex color code (e.g., '#D4AF37')
 * @param alpha - Opacity value (0-1)
 * @returns RGBA color string
 */
export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// ============================================================================
// COMMON COLOR COMBINATIONS
// ============================================================================

export const COLOR_COMBINATIONS = {
  DARK_HERO: {
    background: PRIMARY_COLORS.PURE_BLACK,
    text: PRIMARY_COLORS.CREAM_WHITE,
    accent: PRIMARY_COLORS.LUXURY_GOLD,
  },
  LIGHT_CARD: {
    background: PRIMARY_COLORS.CREAM_WHITE,
    text: PRIMARY_COLORS.PURE_BLACK,
    border: PRIMARY_COLORS.LUXURY_GOLD,
  },
  PREMIUM_BUTTON: {
    background: GRADIENTS.GOLD_SHIMMER,
    text: PRIMARY_COLORS.PURE_BLACK,
    hover: SECONDARY_COLORS.DARK_GOLD,
  },
  NAVIGATION: {
    background: SECONDARY_COLORS.CHARCOAL,
    text: PRIMARY_COLORS.CREAM_WHITE,
    active: PRIMARY_COLORS.LUXURY_GOLD,
  },
} as const;

// ============================================================================
// THEME OBJECT (for styled-components or theme providers)
// ============================================================================

export const LUMIERE_THEME = {
  colors: {
    primary: PRIMARY_COLORS,
    secondary: SECONDARY_COLORS,
    accent: ACCENT_COLORS,
    text: TEXT_COLORS,
  },
  gradients: GRADIENTS,
  cssVars: CSS_VARS,
  combinations: COLOR_COMBINATIONS,
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PrimaryColor = typeof PRIMARY_COLORS[keyof typeof PRIMARY_COLORS];
export type SecondaryColor = typeof SECONDARY_COLORS[keyof typeof SECONDARY_COLORS];
export type AccentColor = typeof ACCENT_COLORS[keyof typeof ACCENT_COLORS];
export type TextColor = typeof TEXT_COLORS[keyof typeof TEXT_COLORS];
export type Gradient = typeof GRADIENTS[keyof typeof GRADIENTS];
export type ColorCombination = typeof COLOR_COMBINATIONS[keyof typeof COLOR_COMBINATIONS];

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

export default LUMIERE_THEME;
