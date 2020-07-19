const path = require("path")
const webpack = require("webpack")

module.exports = {
	entry: "./client/src/index.tsx",
  mode: "development",
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "ts-loader"
      },
      { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" },
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
	resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
   },
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
  devtool: "source-map",
	plugins: [new webpack.HotModuleReplacementPlugin()]
}