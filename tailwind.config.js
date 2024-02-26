// tailwind.config.js

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
        dark: '#333333',
        light: '#f8f8f8',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Courier', 'monospace'],
      },
      fontSize: {
        '2xs': '.625rem', // 10px
        '3xs': '.5rem',   // 8px
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
