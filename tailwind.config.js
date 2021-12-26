const path = require("path");

module.exports = {
  content: [path.resolve("./apps/**/*.{js,ts,tsx}")],
  theme: {
    extend: {},
  },
  plugins: [],
};
