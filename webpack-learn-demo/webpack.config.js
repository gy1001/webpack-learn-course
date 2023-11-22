const { resolve } = require("path");
const StartPlugin = require("./plugins/startPlugin");
const EndPlugin = require("./plugins/endPlugin");
const _resolve = (path) => resolve(__dirname, path);

module.exports = {
  mode: "production",
  entry: _resolve("./src/index.js"),
  output: {
    filename: "bundle.js",
    path: _resolve("dist"),
  },
  plugins: [new StartPlugin(), new EndPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          resolve(__dirname, "./loaders/loaders-1.js"),
          resolve(__dirname, "./loaders/loaders-2.js"),
          resolve(__dirname, "./loaders/loaders-3.js"),
          resolve(__dirname, "./loaders/loaders-4.js"),
        ],
      },
    ],
  },
};
