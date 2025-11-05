/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
        'silkscreen': ['Silkscreen', 'monospace'],
        'schoolbell': ['Schoolbell', 'cursive'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        primary: '#1D2D50',
        secondary: '#5BC0BE',
        background: '#D9D9D9',
      },
      animation: {
        'gentle-shake': 'gentleShake 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-left': 'fadeInLeft 1s ease-out',
      },
      keyframes: {
        gentleShake: {
          '0%, 100%': { transform: 'rotate(-8deg) translateY(0px)' },
          '25%': { transform: 'rotate(-6deg) translateY(-3px)' },
          '50%': { transform: 'rotate(-10deg) translateY(2px)' },
          '75%': { transform: 'rotate(-4deg) translateY(-1px)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          'from': { opacity: '0', transform: 'translateX(-30px) translateY(-50%)' },
          'to': { opacity: '1', transform: 'translateX(0) translateY(-50%)' },
        },
      }
    },
  },
  plugins: [],
}