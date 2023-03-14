const path = require('path');
const HTMLWepbackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "/tarot-divination/"
  },
  devServer: {
    static: './dist',
    port: 4200,
    open: true,
    hot: false
  },
  resolve: {
    extensions: ['.js', '.json', '.png', '.jsx']
  },

  plugins: [
    new HTMLWepbackPlugin({
      title: 'Divination',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets')
        }
      ]
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },

      },
      {
        test: /\.css$/,
	      use: [MiniCSSExtractPlugin.loader, 'css-loader']

      },
      // {
      //   test: /\.(png|jpg|svg|gif)$/,
      //   use: ['file-loader']
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCSSExtractPlugin.loader,
	                    
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",

        ]
      },
    ]
  },
  
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  },

  performance: {
    maxEntrypointSize: 999000,
    maxAssetSize: 99999000
  },

}