/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './**/*.{html,js}'],
  theme: {
    extend: {
      backgroundColor: {
        black: '#111111',
        darkgray: '#151515'
      },
      colors: {
        green: '#33A365',
        lightgreen: '#03A049',
        lightgray: '#ECEDF2'
      },
      fontFamily: {
        archivo: 'Archivo, sans-serif'
      }
    },
  },
  plugins: [],
}

