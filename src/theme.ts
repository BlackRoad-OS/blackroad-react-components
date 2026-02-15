/**
 * BlackRoad Design System - Theme Tokens
 * Based on Golden Ratio (φ = 1.618)
 */

export const colors = {
  // Primary Brand Colors
  hotPink: '#FF1D6C',
  amber: '#F5A623',
  electricBlue: '#2979FF',
  violet: '#9C27B0',

  // Neutrals
  black: '#000000',
  white: '#FFFFFF',
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },

  // Semantic Colors
  success: '#00C853',
  warning: '#FFD600',
  error: '#FF1744',
  info: '#2979FF',
} as const;

export const gradients = {
  brand: `linear-gradient(135deg, ${colors.amber} 0%, ${colors.hotPink} 38.2%, ${colors.violet} 61.8%, ${colors.electricBlue} 100%)`,
  hotPink: `linear-gradient(135deg, ${colors.hotPink} 0%, ${colors.violet} 100%)`,
  amber: `linear-gradient(135deg, ${colors.amber} 0%, ${colors.hotPink} 100%)`,
  blue: `linear-gradient(135deg, ${colors.electricBlue} 0%, ${colors.violet} 100%)`,
} as const;

// Golden Ratio spacing scale (base 8px)
export const spacing = {
  xs: '8px',
  sm: '13px',
  md: '21px',
  lg: '34px',
  xl: '55px',
  '2xl': '89px',
  '3xl': '144px',
} as const;

export const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '40px',
  '4xl': '48px',
} as const;

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  glow: `0 0 20px ${colors.hotPink}40`,
  glowStrong: `0 0 40px ${colors.hotPink}60`,
} as const;

export const transitions = {
  fast: '150ms ease',
  normal: '300ms ease',
  slow: '500ms ease',
} as const;

export const theme = {
  colors,
  gradients,
  spacing,
  fontSizes,
  borderRadius,
  shadows,
  transitions,
} as const;

export type Theme = typeof theme;
export default theme;
