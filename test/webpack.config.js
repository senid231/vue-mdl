var vue = require('vue-loader');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'dist.js',
    library: 'vue-mdl',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: vue.withLoaders({})
    }]
  },
  devtool: 'source-map'
};
