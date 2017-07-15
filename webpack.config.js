const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'public/js',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
  },
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    },
    {
      test: /\.(sass|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }
    // {
    //  test: /\.scss$/,
    //  loader: ExtractTextPlugin.extract({
    //    fallbackLoader: "style-loader",
    //    loader: "css-loader!sass-loader",
    //  }),
    // }
  ]
  },
  plugins: [
    new CriticalPlugin({
      src: 'index.html',
      inline: true,
      minify: true,
      dest: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ImageminPlugin({
     disable: process.env.NODE_ENV !== 'production',
     pngquant: {
       quality: '95-100'
     }
   })
  //  new ExtractTextPlugin("./public/style.css")
  ]
};
