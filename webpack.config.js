const path = require('path');

const PATHS = {
  app: path.resolve(__dirname,'demo'),
  build: path.resolve(__dirname,'demo/build')
};

module.exports = {
  entry: {
    app: PATHS.app + "/main.js"
  },

  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
       test: /\.js?/,
       loader: 'babel-loader',
        options: {
          presets:['env','react']
        }
      }
    ]
  }
};
