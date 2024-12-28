const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Your custom colors
        'custom-white': '#F5F5F5',
        'custom-black': '#2E2E2E',
        'custom-pink': '#E1C6CC',
        'custom-green': '#B2C2B5',
        'custom-gold': '#D4C48F',

        // Team color palettes
        'warriors': {
          DEFAULT: '#1D428A', // Warriors blue
          secondary: '#FFC72C', // Warriors gold
        },
        'mclaren-2024': {
          DEFAULT: '#FF8700', // McLaren orange
          secondary: '#000000', // Black
        },
        'malboro-mclaren': {
          DEFAULT: '#FF0000', // Marlboro red
          secondary: '#FFFFFF', // White
        },
        'hakkinen-mclaren': {
          DEFAULT: '#C0C0C0', // Silver
          secondary: '#FFFFFF', // White
          accent: '#000000', // Black
        },
      },
    },
  },
  plugins: [],
};


