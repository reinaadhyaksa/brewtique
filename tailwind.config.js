/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f8f3ee',
          100: '#e8d9c8',
          200: '#d4ba9a',
          300: '#bf9a6c',
          400: '#af824a',
          500: '#9f6a28',
          600: '#8c5c23',
          700: '#754b1d',
          800: '#5e3b17',
          900: '#472a11',
        },
        cream: '#f5f0e6',
        latte: '#e6d5c3',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}