/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        pink: {
          150: '#F4E5D8'
        }
      }
    },
  },
  plugins: [],
}

