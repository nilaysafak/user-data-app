/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        primary: '#BB86FC',
        secondary: '#03DAC6',
        error: '#CF6679',
        'on-background': '#E1E1E1',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}