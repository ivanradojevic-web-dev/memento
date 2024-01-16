/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        essential: ['Arimo', 'sans-serif']
      },
      colors: {
        'regal-purple': '#552583',
        'golden-yellow': '#fdb927',
        'davys-grey': '525252'
      }
    }
  },
  plugins: []
}
