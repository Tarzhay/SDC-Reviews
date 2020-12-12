var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
       }
      }
    ]
  },
  externals: {
    newrelic: 'newrelic'
    }
};

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   module: {
//     rules: [
//       {
//         test: [/\.jsx$/],
//         include : SRC_DIR,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//           }
//         }
//       }
//     ]
//   },
//    output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   externals: {
//     newrelic: 'newrelic'
//     }
// };