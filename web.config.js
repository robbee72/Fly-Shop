const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: __dirname,

  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public')
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [new ExtractTextPlugin('./bundle.css')],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src')
      },
      {
        test: /\.css$/,
        exclude: [/\.global\./, /node_modules/],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                autoprefixer: true,
                minimize: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          ]
        })
      },
      {
        test: /\.css/,
        include: [/\.global\./, /node_modules/],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: false,
                minimize: true
              }
            }
          ]
        })
      }
    ]
  }
};

console.log('Packing for', process.env.NODE_ENV || 'development');

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map';
}

module.exports = config;
