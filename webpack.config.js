const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'App.js',
    path: path.resolve(__dirname, 'dist'),
    resolve: {
        fallback: {
            http: require.resolve('stream-http')
        }
      }
  },
};