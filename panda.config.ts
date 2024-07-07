import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],
  presets: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        xs: '576px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1408px',
      },
      tokens: {
        fontSizes: {
          badge: { value: '12px' },
          default: { value: '16px' },
          small: { value: '20px' },
          medium: { value: '24px' },
          header: { value: '32px' },
          quote: { value: '64px' },
        },
        borders: {
          default: { value: '1px solid' },
          post: { value: '2px solid' },
          wrapper: { value: '4px solid' },
          quote: { value: '8px solid' },
        },
        lineHeights: {
          small: { value: '16px' },
          medium: { value: '20px' },
          large: { value: '24px' },
        },
        spacing: {
          25: { value: '4px' },
          50: { value: '8px' },
          100: { value: '16px' },
          150: { value: '24px' },
          200: { value: '32px' },
        },
        radii: {
          default: { value: '8px' },
          badge: { value: '16px' },
        },
        shadows: {
          default: { value: '0px 5px 20px rgba(0, 0, 0, 0.2)' },
          defaultInset: {
            value: 'inset 0px 4px 16px rgba(255, 255, 255, 0.2)',
          },
        },
        colors: {
          background: { value: '#2a303c' },
          card: { value: 'rgba(0, 0, 0, 0.2)' },
          primary: {
            value: '#39d353',
            1: { value: '#26a641' },
            2: { value: '#006d32' },
            3: { value: '#0e4429' },
          },
          border: { value: 'rgba(0, 0, 0, 0.2)' },
          white: { value: '#fff' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
