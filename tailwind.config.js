/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cloudy': "url('./assets/background.png')",
        'bulle': "url('./assets/bulle.png')"
      },
      colors: {
        'btnBlue' : '#649DA6',
      }
    },
  },
  plugins: [],
}
