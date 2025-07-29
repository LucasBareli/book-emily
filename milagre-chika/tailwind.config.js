/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      colors: {
        'brand-yellow': '#FFC72C', 
        'brand-blue': '#4A90E2', 
        'brand-brown': '#5A3A22', 
        'brand-bg': '#FDFBF5',     
        'brand-text': '#3D2B1F',   
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        md: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};