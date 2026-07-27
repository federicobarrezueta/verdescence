/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        botanic: {
          DEFAULT: '#2F5A2F',
          50: '#EAF1EA',
          100: '#D2E2D3',
          400: '#4E7B4E',
          500: '#2F5A2F',
          600: '#264A26',
          700: '#1E3A1E',
        },
        clay: {
          DEFAULT: '#C66B3D',
          400: '#D98A60',
          500: '#C66B3D',
          600: '#A85630',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          50: '#FBF9F3',
          100: '#F5F1E8',
          200: '#ECE5D4',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          500: '#3A3A3A',
          400: '#6B6B6B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};