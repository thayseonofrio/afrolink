const path = require("path")
const webpack = require("webpack")

module.exports = {
	entry: "./client/src/index.js",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							esModule: false
						}
					},
				],
			},
			{
				test: /\.(jpg|jpeg|svg|png)$/,
				use: {
				 loader: 'url-loader'
				}
			 }

		]
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "client/dist/"),
		publicPath: "/client/dist/",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "client/public/"),
		port: 3000,
		publicPath: "http://localhost:3000/dist/",
		hotOnly: true
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
}