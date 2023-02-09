/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: '#662d91' },
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
