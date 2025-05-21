/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OswaldBold: ['OswaldBold', 'sans-serif'],
        OswaldMedium: ['OswaldMedium', 'sans-serif'],
        OswaldRegular: ['OswaldRegular', 'sans-serif'],
        RobotoFlex: ['RobotoFlex', 'sans-serif'],
        R1: ['R1', 'sans-serif'],
        Archivo: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}