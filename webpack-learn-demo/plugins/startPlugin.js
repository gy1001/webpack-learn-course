class StartPlugin {
  constructor(options) {
    this.options = options;
  }
  // 插件必须有一个 apply 方法，接收第一个参数 compiler
  apply(compiler) {
    compiler.hooks.start.tap("StartPlugin", () => {
      console.log("Start Plugin");
    });
  }
}

module.exports = StartPlugin;
