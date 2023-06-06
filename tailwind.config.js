/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
      colors: {
        'custom-blue': '#4361ee',
        'custom-blue-hover': '#3f37c9',
        neutral: {
          textDark: '#9F9F9F'
        }
      },
      screens: {
        'web': '1300px'
      }
    },
  },
  plugins: [],
}
