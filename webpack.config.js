const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "ts-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: "url-loader",
        },
	  },
	  {
		  test: /\.svg$/,
		  use: [
			  {
				  loader: "svg-url-loader",
				  options: {
					  limit: 10000,
				  }
			  }
		  ]
	  }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/client/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/client/",
    hotOnly: true,
  },
  devtool: "source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
