const { DefinePlugin } = require('webpack');

const WebpackBarPlugin = require('webpackbar');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  devtool: 'source-map',
  plugins: [
    new WebpackBarPlugin(),
    new DefinePlugin({
      // 定义环境变量，区分开发和生产环境
      // 具体详情可查看DefinePlugin文档
      // 'process.env.NODE_ENV':
      //   process.env.NODE_ENV === 'production'
      //     ? JSON.stringify('production')
      //     : JSON.stringify('development'),
    }),
  ],
};
