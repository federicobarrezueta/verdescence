/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        botanic: {
          DEFAULT: '#2A6E3E',
          50: '#E8F1EC',
          100: '#C5DECC',
          200: '#A0CBA9',
          400: '#4A9B6A',
          500: '#2A6E3E',
          600: '#1F5631',
          700: '#163D22',
        },
        sage: {
          DEFAULT: '#7A9B7E',
          300: '#A8C2AB',
          400: '#8DA88F',
          500: '#7A9B7E',
          600: '#5F7F62',
        },
        cream: {
          DEFAULT: '#F4F6F0',
          50: '#FAFBF7',
          100: '#F4F6F0',
          200: '#E8EDE5',
        },
        ink: {
          DEFAULT: '#1A2418',
          500: '#3A4838',
          400: '#6B7868',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};