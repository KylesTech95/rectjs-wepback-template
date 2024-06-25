const miniCssExtract = require("mini-css-extract-plugin");

module.exports = function styleConfig() {
  return {
    test: /\.(s)?[a|c]ss$/i,
    exclude:/node_modules/i,
    use: ["style-loader", "css-loader"],
  }
};
