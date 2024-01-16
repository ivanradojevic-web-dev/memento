/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        essential: ['Arimo', 'sans-serif']
      }
    }
  },
  plugins: []
}
