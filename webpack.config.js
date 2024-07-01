const path = require("path");
const defaultTemplate = "template/template.html";
const HtmlPlug = require("html-webpack-plugin");
const MiniPlug = require("mini-css-extract-plugin");
module.exports = {
  // mode
  //   mode: "production", // development
  mode: "development", // development

  // entry
  // multi entry: open up more zippers
  entry: [
    path.resolve(__dirname, "src/index.js"),
    path.resolve(__dirname, "src/index2.js"),
  ],

  // modules
  module: {
    rules: [
      // first rule
      {
        test: /\.css$/i,
        exclude: /node_modules/i,
        use: [
          MiniPlug.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/i,
      },
    ],
  },

  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8005,
    open: false,
    hot: true,
    client: false,
  },
  // plugins
  plugins: [
    new HtmlPlug({
      filename: "index.html",
      clean: true,
      title: "Webpack tutorial",
      base: {
        href: "http://localhost:5500/" + "dist" + "/",
        target: "_blank",
      },
      template: path.resolve(__dirname, defaultTemplate),
      array: {
        numbers: [1, 2, 4, 5],
      },
    }),
    new MiniPlug({
      linkType: "text/css",
      filename: "styles.css",
    }),
  ],
  // output/exit
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
    clean: true,
  },
};

// process

// we have stuff
// pack our backpack with stuff inside of big zipper (entry)

// throw backpack at client's face
