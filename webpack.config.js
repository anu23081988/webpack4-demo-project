const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  
    // Entry
    entry: './src/index.js',
    // Output
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    // Loaders
    module: {
      rules : [
        // JavaScript/JSX Files
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
          },
        // CSS Files
        {
           test: /\.(css|scss)$/,
           use: ['style-loader', 'css-loader', 'sass-loader'],
         }
      ]
    },
    // Plugins
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
          }),
        new UglifyJsPlugin()
    ]
    // devtool: 'inline-source-map'
  };
  // Exports
  module.exports = config;

/*********2nd way************************** *
module.exports = (env, argv) => ({
  entry : './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules : [
        // JavaScript/JSX Files
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      }
    devtool: argv.mode ==='development' ? 'source-map' : false;
})
  */