const { resolve } = require('path');
const TransformPages = require('uni-read-pages');
const { webpack } = new TransformPages();
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        ROUTES: webpack.DefinePlugin.runtimeValue(() => {
          const tfPages = new TransformPages({
            includes: ['path', 'name', 'aliasPath', 'meta'],
          });
          return JSON.stringify(tfPages.routes);
        }, true),
      }),
    ],
  },
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use('sass-loader')
        .loader('sass-loader')
        .tap((options) => {
          options.includePaths = [resolve(__dirname, 'src/styles')];
          options.additionalData = '@import "~@/lib/scss/variables.scss";';
          return options;
        });
    });
  },
};
