const { SyncHook } = require("tapable");
class Compiler {
  constructor(options) {
    this.options = options;
    this.hooks = {
      start: new SyncHook(),
      end: new SyncHook(),
    };
  }
  run() {
    this.hooks.start.call();
    console.log("todo something else");
    this.hooks.end.call();
  }
}

module.exports = Compiler;
