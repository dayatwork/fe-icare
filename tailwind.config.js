/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      red: colors.red,
      white: '#ffffff',
      black: '#000000',
      lime: '#A6F102',
      limeade: '#6EA001',
      gold: '#ffcd3c',
      'verdun-green': '#486801',
      primary: {
        DEFAULT: '#A6F102',
        50: '#E5FEAC',
        100: '#DEFE98',
        200: '#D1FE70',
        300: '#C4FD47',
        400: '#B7FD1F',
        500: '#A6F102',
        600: '#80B902',
        700: '#598201',
        800: '#334A01',
        900: '#0D1200',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
      screens: {
        tablet: '960px',
        desktop: '1248px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
}
