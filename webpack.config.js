const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const isDev = env.mode === 'development';
  return {
    target: ['web', 'es5'], // для перевода в код es5.. babel targets
    mode: env.mode ?? 'development', // env обьект окружения со свойством mode если не указан '-- --env mode=production', development по умолчанию
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[contenthash].js',
      clean: true,
    },
    devServer: {
      port: env.port ?? 7000, // env обьект окружения со свойством port если не указан '-- --env port=xxxx', то 7000
      open: true,
      devMiddleware: {
        writeToDisk: true,
      },
      historyApiFallback: true,
    },
    devtool: isDev && 'inline-source-map',
    // devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        // favicon: path.resolve(__dirname, 'src', 'images', 'favicon-32x32.png'),
      }),
      new MiniCssExtractPlugin({
        filename: 'style/style.[contenthash].css',
        chunkFilename: 'style/style.[contenthash].css',
      }),

      isDev && new webpack.ProgressPlugin(), // to see the building progression
      new CopyPlugin({
        patterns: [
          { from: 'src/images', to: 'images' }, // Копіює файли з src/images у папку build/static/images
          // { from: 'src/fonts', to: 'fonts' },
        ],
      }),
    ].filter(Boolean),
    optimization: {
      minimizer: [
        new CssMinimizerPlugin({
          test: /\.css$/i,
          parallel: 4,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader, // for using 'style-loader' in order to inline <style> in html change MiniCssExtractPlugin.loader to style-loader
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
          include: [
            path.resolve(__dirname, 'src', 'style'),
            path.resolve(__dirname, 'src', 'components'),
          ], // where to take style.scss file
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,

          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      edge: '17',
                      firefox: '60',
                      chrome: '67',
                      safari: '11.1',
                      ie: '11',
                    },
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        },
        // {
        //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //   type: 'javascript/auto',
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         name: '[name].[ext]',
        //         outputPath: 'fonts/',
        //       },
        //     },
        //   ],
        // },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
