const postcssOKLabFunction = require("@csstools/postcss-oklab-function");

module.exports = {
  plugins: [postcssOKLabFunction({ preserve: false })],
};
