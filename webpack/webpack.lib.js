const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(
  {
    mode: 'production',
    entry: path.resolve('src', 'module.ts'),
    output: {
      path: path.resolve(__dirname, '../', 'lib'),
      publicPath: '/',
      library: {
        name: 'react-dev-template',
        type: 'umd',
      },
      filename: 'module.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            { loader: 'babel-loader' },
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, '../tsconfig.lib.json'),
              },
            },
          ],
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()],
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
  },
  common,
);
