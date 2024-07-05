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
        colors: {
          background: { value: '#2a303c' },
          activePost: { value: 'rgba(0, 0, 0, 0.2)' },
          primary: { value: '#39d353' },
          border: { value: '#373c48' },
          white: { value: '#fff' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
