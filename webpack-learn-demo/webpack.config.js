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
};
