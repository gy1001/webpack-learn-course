# webpack-learn-demo

## 01-commit: feat:webpack 初始化

完成 webpack 的雏形
执行 npm run debug 结果得到 finalConfig,结果大概如下

```js
{
  mode: 'development',
  entry: '/Users/yuangao/Code/Learn/MyGithub/webpack-learn-course/webpack-learn-demo/src/index.js',
  output: {
    filename: 'bundle.js',
    path: '/Users/yuangao/Code/Learn/MyGithub/webpack-learn-course/webpack-learn-demo/dist'
  },
  NODE_ENV: 'development'
}
```

## 02-commit: feat: webpack-执行插件的 apply 方法

> 增加依赖 tapable 库

用第一步得到的最终参数进行初始化 Compiler 对象，并加载配置文件中中的参数，执行各个插件的 apply 方法，返回 compiler 方法

执行 compiler 的 run 方法，触发响应的钩子函数，并开始编译

## 03-commit: feat:编译模块执行 loader

根据配置中的 entry 找出所有的入口文件

从入口文件出发，调用所有配置的 Loader 对模块进行编译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
