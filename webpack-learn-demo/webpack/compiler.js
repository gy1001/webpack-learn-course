const { SyncHook } = require("tapable");
const { resolve } = require("path");
const fs = require("fs");

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
    const { entry, context } = this.options;
    const selfEntry = resolve(context, entry);
    const entryModule = this.buildModule(selfEntry);
    this.hooks.end.call();
  }

  buildModule(modulePath) {
    // 读取源代码
    const originSourceCode = fs.readFileSync(modulePath, "utf-8");
    let targetSourceCode = originSourceCode;

    const rules = this.options.module.rules;
    let loaders = [];
    rules.forEach((rule) => {
      if (rule.test.test(modulePath)) {
        loaders = [...loaders, ...rule.use];
      }
    });

    loaders.forEach((loader) => {
      targetSourceCode = require(loader)(targetSourceCode);
    });

    console.log("originSourceCode", originSourceCode);
    console.log("targetSourceCode", targetSourceCode);
  }
}

module.exports = Compiler;
