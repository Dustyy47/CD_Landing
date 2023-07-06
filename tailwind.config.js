/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: '#27272A',
      greyDark: '#696969',
      greyLight: '#E5E7EB',
      lavenderPurple: '#7E3AF2',
      lavenderPurpleDark: '#6C2BD9',
      lavenderPurpleLight: '#CABFFD',
      lavenderRed: '#E02424',
      white: 'white',
    },
    fontFamily: {
      main: 'Montserrat'
    },
    extend: {
      backgroundImage: {
        discuss : "url('../public/images/back.png')",
      }
    }
  },
  plugins: [],
}

