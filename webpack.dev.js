const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CircularDependencyPlugin = require("circular-dependency-plugin");

console.log(" -- DEVELOPMENT CONFIGURATION -- ");

module.exports = merge(common, {
	mode: "development", // This uses webpack.DefinePlugin to set process.env.NODE_ENV *inside the compiled code* itself, which is used by hot and @hot-loader/react-dom
	devtool: "eval",
	devServer: {
		compress: true,
		host: "0.0.0.0",
		port: 3000,
		hot: true, // Enable HMR
		liveReload: false,
		overlay: true, // Show errors with overlay
		publicPath: "/",
		// progress: true, // Enables verbose progress logging when building
		writeToDisk: filePath => !/\.hot-update.(js|json)$/.test(filePath), // Don't save hmr files to disk
		contentBase: path.join(__dirname, "build"),
		historyApiFallback: true, // Redirect 404s to index.html
		// disableHostCheck: true, // Allows other people at the office to connect to your dev server
	},
	plugins: [ // Plugins specific to the dev build
		new CircularDependencyPlugin({ // This plugin will find circular dependencies, which sometimes can not be avoided but can be the culprit of weird bugs, and should be avoided if possible
			exclude: /node_modules/,
			include: /\.jsx/,
			cwd: process.cwd(),
		}),
	],
	stats: {
		all: false, // Default value for the stats types we don't specify below. Set to true to see all details
		colors: true, // Use colors in terminal output
		errors: true, // Log errors
		warnings: true, // Log warnings
	},
	resolve: {
		alias: {
			"react-dom": "@hot-loader/react-dom"
		}
	}
});