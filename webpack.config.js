const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const jsonServer = require('json-server');

const environment = (process.env.NODE_ENV || 'development').trim();
const isDev = environment !== 'production';

module.exports = {
  mode: environment,
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@store': path.resolve(__dirname, 'src/app/store')
    }
  },
  entry: {
    vendor: './src/vendor.ts',
    polyfills: './src/polyfills.ts',
    main: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].[chunkhash].chunk.js',
  },
  module: {
    rules: [{
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular-router-loader'
        ]
      },
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        loader: ['raw-loader', 'sass-loader?sourceMap']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
        },
      },
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      path.resolve(__dirname, 'src'), {}
    ),
    new FilterWarningsPlugin({
      exclude: /System.import/
    }),
    new CleanWebpackPlugin('dist', {}),
    new CopyWebpackPlugin([{
        from: 'src/assets',
        to: 'assets'
      },
      {
        from: 'src/manifest.json'
      },
    ]),
    new UglifyJsPlugin({
      sourceMap: false,
      parallel: true
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    stats: {
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      colors: true,
      errors: true,
      errorDetails: false,
      hash: false,
      timings: false,
      modules: false,
      warnings: false,
    },
    setup: function (app) {
      app.use('/api', jsonServer.router('db.json'));
    },
  },
};
