const Compiler = require("./compiler");

function webpack(options) {
  const argvs = process.argv.slice(2);
  const shellConfig = argvs.reduce((prev, current) => {
    const [key, value] = current.split("=");
    prev[key.slice(2)] = value;
    return prev;
  }, {});
  const finalConfig = Object.assign({}, options, shellConfig);
  const plugins = finalConfig.plugins || [];
  const compiler = new Compiler(finalConfig);
  plugins.forEach((plugin) => {
    plugin.apply(compiler);
  });
  return compiler;
}
module.exports = webpack;
