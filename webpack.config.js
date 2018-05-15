const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, argv) => {
    const isDev = argv.mode === "development";

    const htmlWebPackPlugin = new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    });

    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: isDev ? "[name].css" : "[name].[hash].css",
        chunkFilename: isDev ? "[id].css" : "[id].[hash].css"
    });

    return {
        entry: "./src/js/index.js",
        resolve: {
            extensions: [
                ".js", ".jsx"
            ],
            alias: {
                ["~"]: path.resolve(__dirname, "src/js")
            }
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.s?[ac]ss$/,
                use: [{
                    loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1
                    }
                }, {
                    loader: "postcss-loader",
                    options: {
                        sourceMap: false,
                        ident: "postcss",
                        plugins: () => [require("autoprefixer")({})]
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: [path.resolve(__dirname, "src/scss")]
                    }
                }],
            }]
        },
        plugins: [htmlWebPackPlugin, miniCssExtractPlugin],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: false,
                    parallel: true,
                    sourceMap: false
                }),
                new OptimizeCSSAssetsPlugin({})
            ],
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: "styles",
                        test: /\.css$/,
                        chunks: "all",
                        enforce: true
                    }
                }
            }
        }
    };
}
