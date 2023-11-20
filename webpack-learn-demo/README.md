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

用第一步得到的最终参数进行初始化 Compiler 对象，并加载配置文件中中的参数，执行各个插件的 apply 方法，返回 compiler 方法

执行 compiler 的 run 方法，触发响应的钩子函数，并开始编译
