const path = require('path');

module.exports = {
    chainWebpack: (config) => {
      // 针对 HTML 文件添加自定义 Loader
      config.module
      .rule('vue')
      .use('replace-h1-loader')
        .loader('./replace-h1-loader.js') // 指定自定义 Loader 的文件路径
        .end()
        .use('print-content-loader')
        .loader('./print-content-loader.js')
        .end()
        .use('custom-directive-loader')
        .loader('./custom-directive-loader.js')
        .end();
    },
  };