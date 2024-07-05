import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        shadows: {
          default: { value: '0px 5px 20px rgba(0, 0, 0, 0.2)' },
          defaultInset: { value: 'inset 0px 4px 16px rgba(255, 255, 255, 0.2)' },
        },
        colors: {
          background: { value: '#2a303c' },
          selectedPost: { value: 'rgba(0, 0, 0, 0.2)' },
          primary: { value: '#39d353' },
          border: { value: 'rgba(0, 0, 0, 0.2)' },
          white: { value: '#fff' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
