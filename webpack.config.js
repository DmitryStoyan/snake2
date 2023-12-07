const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    menu: "./js/menu.js",
    game: "./js/game.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: ["menu"],
    }),
    new HtmlWebpackPlugin({
      template: "./game.html",
      filename: "game.html",
      chunks: ["game"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "css", to: "css" }, // Копирование файлов из папки css в папку dist/css
      ],
    }),
  ],
};
