module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   theme: {
    extend: {
      colors: {
        primary:    "#C48A3A",
        secondary:  "#8B4513",
        background: "#FFF8F0",
        dark:       "#2D2D2D",
        accent:     "#E63946",
        textColor:  "#444444",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body:    ["Poppins", "sans-serif"],
      },
    },
  },
  },
  plugins: [],
}