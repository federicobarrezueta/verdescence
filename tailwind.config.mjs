/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        botanic: {
          DEFAULT: '#2F6B3F',
          50: '#E8F1EC',
          100: '#C5DECC',
          200: '#A0CBA9',
          300: '#7DB889',
          400: '#5AAB6A',
          500: '#2F6B3F',
          600: '#245533',
          700: '#1A3D24',
        },
        accent: {
          DEFAULT: '#A8D76A',
          400: '#B8DF85',
          500: '#A8D76A',
          600: '#8FB855',
          700: '#759A45',
        },
        earth: {
          DEFAULT: '#4B382A',
          400: '#6B5748',
          500: '#4B382A',
          600: '#3A2A1F',
          700: '#2A1D15',
        },
        cream: {
          DEFAULT: '#F4F6F0',
          50: '#FAFBF7',
          100: '#F4F6F0',
          200: '#E8EDE5',
        },
        ink: {
          DEFAULT: '#213326',
          500: '#3A4D3F',
          400: '#6B7D6F',
        },
      },
      fontFamily: {
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};