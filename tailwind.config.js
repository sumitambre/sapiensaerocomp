/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#003049',
        },
        teal: {
          500: '#14939C',
          600: '#02969B',
        },
        orange: {
          500: '#D95D39',
        },
        amber: {
          400: '#F59E0B',
        },
        offwhite: '#EDEEE7',
        body: '#495057',
        heading: '#595758',
        gray: '#9D9D9D',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      boxShadow: {
        glow: '0 10px 40px rgba(0, 48, 73, 0.25)',
      },
    },
  },
  plugins: [],
};
