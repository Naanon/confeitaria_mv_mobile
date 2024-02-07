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
      },
      fontFamily: {
        heading: "Galano-Grotesque-Semi-Bold",
        subtitle: "Galano-Grotesque-Medium",
        body: "Galano-Grotesque",
        bold: "Galano-Grotesque-Bold",
      }
    },
  },
  plugins: [],
}

