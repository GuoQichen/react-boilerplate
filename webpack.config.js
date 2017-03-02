var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: path.join(__dirname, 'src/main.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	devServer: {
		compress: true,
		port: 8000,
		inline: true,
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: __dirname + '/src/',
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader',
			},
		],
	},
	devtool: 'source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}