const path = require('path');

const PATHS = {
  app: path.resolve(__dirname,'docs/'),
  build: path.resolve(__dirname,'docs/static')
};

module.exports = {
  entry: {
    app: PATHS.app + "/components/main.js"
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
