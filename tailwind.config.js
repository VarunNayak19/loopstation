/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '250px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-seif'],
        alata: ['Alata']
      },
      letterSpacing: {
        widest: '.3em'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { opacity: "0%" },
          '50%': { opacity: "0%" },
        }
      }
    },
  },
  plugins: [],
}
