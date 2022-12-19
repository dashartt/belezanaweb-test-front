/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica, Arial', 'sans-serif']
      },
      colors: {
        orangetheme: {
          normal: '#FF6C00',
          hover: '#D45A00'
        }
      }
    }
  },
  plugins: []
}
