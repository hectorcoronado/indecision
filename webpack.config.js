const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // js
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      // s/css: the '?' catches both types of files (needed for normalize.css):
      {
        test: /\.?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}
