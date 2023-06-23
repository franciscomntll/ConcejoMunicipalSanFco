/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}", "./layout/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0378BA",
        "secondary": "#FFD900"
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};