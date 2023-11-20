const { resolve } = require("path");
const _resolve = (path) => resolve(__dirname, path);

module.exports = {
  mode: "production",
  entry: _resolve("./src/index.js"),
  output: {
    filename: "bundle.js",
    path: _resolve("dist"),
  },
};
