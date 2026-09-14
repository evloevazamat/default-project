/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coal: '#11110F',
        graphite: '#1B1A17',
        stone: '#292722',
        bone: '#EDE8DF',
        ash: '#99938A',
        olive: '#8A806C',
        sand: '#B8AD9C',
      },
      fontFamily: {
        sans: ['Gilroy', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}