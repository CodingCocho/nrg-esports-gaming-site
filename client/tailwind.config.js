/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale:
      {
        '200': '2'
      },
      gridTemplateColumns:
      {
        '1-1/2': 'repeat(1, minmax(0, .5fr))'
      }
    },
  },
  plugins: [require("daisyui")],
}
