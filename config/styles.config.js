const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = function styleConfig() {
  return {
    test: /\.(s)?[a|c]ss$/i,
    exclude: /node_modules/i,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      // "style-loader",
      "css-loader",
      "postcss-loader",
    ], // style-loader & mini-css-extrac cannot go together
  };
};
