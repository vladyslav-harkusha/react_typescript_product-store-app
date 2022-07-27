/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'emerald': {
        200: '#a7f3d0',
        500: '#10b981',
        700: '#047857',
      },
    },
  },
  plugins: [],
}
