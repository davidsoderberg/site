import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}'],

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
      semanticTokens: {
        fontSizes: {
          badge: { value: '12px' },
          text: { value: '16px' },
          menu: { value: '20px' },
          sectionHeader: { value: '24px' },
          pageHeader: { value: '28px' },
          header: { value: '32px' },
          quote: { value: '64px' },
        },
        borders: {
          default: { value: '1px solid' },
          wrapper: { value: '4px solid' },
          quote: { value: '8px solid' },
        },
        radii: {
          default: { value: '16px' },
          quote: { value: '8px' },
        },
        lineHeights: {
          header: { value: '32px' },
          quote: { value: '16px' },
          pageHeader: { value: '28px' },
          sectionHeader: { value: '24px' },
          text: { value: '24px' },
        },
        colors: {
          background: { value: '#2a303c' },
          card: { value: '#212630' },
          border: { value: '#212630' },
          primary: { value: '#39d353' },
          primary2: { value: '#26a641' },
          primary4: { value: '#006d32' },
          primary6: { value: '#0e4429' },
        },
        shadows: {
          default: { value: '0px 5px 20px #212630' },
          defaultInset: {
            value: 'inset 0px 4px 16px #545963',
          },
        },
        spacing: {
          25: { value: '4px' },
          50: { value: '8px' },
          100: { value: '16px' },
          150: { value: '24px' },
          200: { value: '32px' },
        },
      },
      tokens: {
        colors: {
          white: { value: '#ffffff' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
