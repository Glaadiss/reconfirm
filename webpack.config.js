const path = require("path");
const nodeExternals = require("webpack-node-externals");
const FlowBabelWebpackPlugin = require("flow-babel-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/lib/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist/lib"),
    filename: "index.js",
    library: "",
    libraryTarget: "commonjs"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          plugins: ["transform-flow-comments"],
          presets: ["@babel/preset-env", "@babel/react", "@babel/preset-flow"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new FlowBabelWebpackPlugin()]
};
