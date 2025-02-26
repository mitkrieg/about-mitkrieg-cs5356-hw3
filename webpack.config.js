// webpack.config.js
const path = require('path');

module.exports = {
  entry: {
     'bundle': './src/index.js'
    }, // Entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output to "dst" so your index.html can load bundle.js
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Matches .css files
        use: ['style-loader', 'css-loader'], // Processes CSS files
      },
    ],
  },
  mode: 'development', // or 'production'
};