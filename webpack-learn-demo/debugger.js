const webpack = require("./webpack/index");
const webpackConfig = require("./webpack.config.js");
const compiler = webpack(webpackConfig);
compiler.run();
