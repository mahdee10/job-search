/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'my-green': '#00cc99',
        'f2f2f2': '#f2f2f2',
        'f9f9f9': '#f9f9f9',
        'fbfbfb': '#fbfbfb',
        'ffffff': '#ffffff',
        '8a8a8a': '#8a8a8a',
        '969696': '#969696',
        'c4c4c4': '#c4c4c4',
      },
      
      width: {
        '15': '15%',
        '54': '54%',
        'q': '24%',
        'h': '48%',
        'th': '504px',
      },
      fontSize:{
        'xxs':'0.7rem',
        'xxxs':'0.5rem'
      }
    },
  },
  plugins: [],
}
