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
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
				test: /\.(css|sass)$/,
				loaders: ["style-loader", "css-loader", "sass-loader"],
			}
		]
	},
}

module.exports = config;
