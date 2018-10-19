var path = require('path');

var parentDir = path.join(__dirname, './');

const config = {
  mode: 'development',
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
				test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
			}
		]
	},
}

module.exports = config;
