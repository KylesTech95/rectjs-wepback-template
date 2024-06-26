const path = require("path");
const HtmlPlug = require("html-webpack-plugin");
const htmlConfig = require("./config/html.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// import rules
const rules = {
  js: require("./config/rules/mod_tests.js").js,
  styles: require("./config/rules/mod_tests.js").styles,
};
module.exports = {
  // mode
  mode: "development",

  // entry & output{path,filename,clean}
  entry: [path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  //   module{rules}
  module: {
    rules: [rules.js, rules.styles],
  },

  // devtool
  devtool: "source-map",
  //devServer{static(dist),port,open,hot,allowedHosts,proxy[{context[regex,regex],target(host:port)}]}
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3442,
    hot: false,
    proxy: [
      {
        context: ["/api", "/cfg", "/reviews"],
        target: "http://localhost:6655",
      },
    ],
  },
  // plugins
  plugins: [
    new HtmlPlug(htmlConfig()),
  ],
};
