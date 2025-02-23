/** @type {import('tailwindcss').Config} */
export default {
  content: ['./storyblok/**/*.{html,js,ts,vue}'],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')]
}

