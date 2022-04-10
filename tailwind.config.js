const path = require("path");

module.exports = {
  content: [
    path.resolve(__dirname, "./packages/**/*.{js,ts,tsx}"),
    path.resolve(__dirname, "./apps/**/*.{js,ts,tsx}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
