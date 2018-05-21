var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  context: path.resolve(__dirname),
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: 'babel-loader',      
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};