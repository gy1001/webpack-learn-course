function webpack(options) {
  const argvs = process.argv.slice(2);
  const shellConfig = argvs.reduce((prev, current) => {
    const [key, value] = current.split("=");
    prev[key.slice(2)] = value;
    return prev;
  }, {});
  const finalConfig = Object.assign({}, options, shellConfig);
  console.log(finalConfig);
}
module.exports = webpack;
