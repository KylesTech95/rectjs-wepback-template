const styleConfig = require("../styles.config");
module.exports = {
  js: {
    test: /\.js$/i,
    exclude: /node_modules/i,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    },
  },
  styles: styleConfig(),
};
