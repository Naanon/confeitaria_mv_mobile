/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        pink: {
          "150": "#F4E5D8"
        },
        yellow: {
          "550": "#D59437"
        },
        brown: {
          "750": "#7D3924"
        }
      },
      fontFamily: {
        heading: "Galano-Grotesque-Semi-Bold",
        subtitle: "Galano-Grotesque-Medium",
        body: "Galano-Grotesque",
        bold: "Galano-Grotesque-Bold",
      },
      textColor: {
        yellow: {
          "550": "#D59437"
        },
        brown: {
          "750": "#7D3924"
        }
      },
      borderColor: {
        yellow: {
          "550": "#D59437"
        }
      }
    },
  },
  plugins: [],
}

