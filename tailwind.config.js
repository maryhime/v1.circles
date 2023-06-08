/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'urbanist' : 'Urbanist, sans-serif',
        'body' : 'Montserrat, sans-serif'
      },
      colors: {
        'primary': '#004275',
        'accent2': '#FDAF77',
        'accent1': '#FF7571'
      }
    },
  },
  plugins: [],
}

