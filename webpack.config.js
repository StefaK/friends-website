const path = require('path');
 
module.exports = {
  entry: './src/main.js',
  mode: "development",
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
    static: {
        directory: path.join(__dirname, "dist")
    },
    compress: true,
    port: 8080
  }
}