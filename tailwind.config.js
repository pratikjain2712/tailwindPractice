module.exports = {
  important: true,
  //Purging for Production is configured in PostCSS Config
  purge: {
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {},
    fontFamily: {
      sans: ["'SF Pro Display'", "sans-serif"],
      serif: ["'SF Pro Text'", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
