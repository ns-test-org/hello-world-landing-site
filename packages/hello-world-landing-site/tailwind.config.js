/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'color-shift': 'color-shift 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'color-shift': {
          '0%, 100%': { color: '#fb923c' }, // orange-400
          '25%': { color: '#fbbf24' }, // amber-400
          '50%': { color: '#fde047' }, // yellow-300
          '75%': { color: '#f87171' }, // red-400
        },
      },
    },
  },
  plugins: [],
}



