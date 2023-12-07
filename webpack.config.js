// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production", // Или 'development' в зависимости от нужд
  entry: {
    menu: "./js/menu.js",
    game: "./js/game.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
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
  ],
};
