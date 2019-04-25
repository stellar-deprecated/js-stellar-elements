const path = require("path");
const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");

const packageInfo = require("./package.json");

const plugins =
  process.env.NODE_ENV !== "production" ? [] : [new PeerDepsExternalsPlugin()];

const mode =
  process.env.NODE_ENV !== "production" ? "development" : "production";

module.exports = {
  entry: "./src/index.js",
  mode,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "stellar-elements.js",
    library: packageInfo.name,
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  plugins,
  resolve: {
    extensions: [".js"],
  },
};
