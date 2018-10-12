var path = require('path');

var parentDir = path.join(__dirname, './');

const config = {
  entry: [
		path.join(parentDir, 'index.js')
  ],
  devServer: {
    contentBase: __dirname + '/src',
    historyApiFallback: true
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
	module: {
		rules: [
      {
			  test: /\.(js|jsx)$/,
				loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
				test: /\.(css|sass)$/,
				loaders: ["style-loader", "css-loader", "sass-loader"],
			}
		]
	},
}

module.exports = config;
