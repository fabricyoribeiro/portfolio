/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'bg-image': "linear-gradient(rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.727)), url('/src/images/background2.jpg')"
      // }
      // fontFamily: {
      //   'fira-code': "'Fira Code', monospace"
      // }
      // keyframes: {
      //   float :{
      //     '0%': { transform: 'translate(0,  0px)' },
      //     '50%':  { transform: 'translate(0, 15px)' },
      //     '100%':   { transform: 'translate(0, -0px)' } 
      //   }
      // }
      animation: {
        'animation-delay': 'animation-delay: 4s'
      },
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif']
      }
    },
  },
  plugins: [],
}
