const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = function styleConfig() {
  return {
    test: /\.(s)?[a|c]ss$/i,
    exclude: /node_modules/i,
    use: ['style-loader',"css-loader"], // style-loader & mini-css-extrac cannot go together
  };
};
