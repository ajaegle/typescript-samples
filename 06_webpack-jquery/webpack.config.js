var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new LiveReloadPlugin({appendScriptTag:true})
  ]
}
