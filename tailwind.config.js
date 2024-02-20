/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '440px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [],
}

