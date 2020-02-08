const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		filename: "joenote.js",
		path: path.resolve(__dirname, "build"),
	},
	module: {
		rules: [
			// JS & JSX files
			{
				test: /\.(js|jsx)$/,
				resolve: { extensions: [".js", ".jsx", ".json"] },
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			// CSS files
			{
				test: /\.css$/i,
				use: [
					{ loader: MiniCssExtractPlugin.loader, options: { hmr: process.env.NODE_ENV !== "production" } },
					{ loader: "css-loader" },
				],
			},
			// Fonts
			{
				test: /\.(woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
				use: ["url-loader"],
			},
		],
	},
	plugins: [
		new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/), // Reduce momentjs file size (by removing unused locales)
		new MiniCssExtractPlugin({ filename: "joenote.css" }),
		new HtmlWebpackPlugin({
			template: "src/index.ejs",
			minify: false,
		}),
	],
};