const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

console.log(" -- PRODUCTION CONFIGURATION -- ");

module.exports = merge(common, {
	mode: "production", // This uses webpack.DefinePlugin to set process.env.NODE_ENV *inside the compiled code* itself, which is used by hot and @hot-loader/react-dom
	devtool: "source-map", // Avoid inline-*** and eval-*** use in production as they can increase bundle size and reduce the overall performance.
	plugins: [ // Plugins specific to the prod build
		new OptimizeCssAssetsPlugin(), // This will minify the CSS
	],
});