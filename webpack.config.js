const path = require("path");

const PUBLIC_PATH = "/";
const ENABLE_STATIC_SITE_GENERATOR = false;
const ESLINT = true;

const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");

module.exports = (env, argv) => {

    console.log("\x1b[32m", "Static Site Generator: " + ENABLE_STATIC_SITE_GENERATOR + "\n");

    console.log("\x1b[32m", "EsLint: " + ESLINT + "\n");

    const isDev = argv.mode === "development";

    const htmlWebPackPlugin = new HtmlWebPackPlugin({
        template: "./src/js/index.ejs",
        filename: "./index.html",
        inject: false
    });

    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: isDev ? "[name].css" : "[name].[hash].css",
        chunkFilename: isDev ? "[id].css" : "[id].[hash].css"
    });

    const staticSiteGeneratorPlugin = new StaticSiteGeneratorPlugin({
        globals: {
            window: {}
        },
        crawl: true
    });

    const providePlugin = new webpack.ProvidePlugin({
        _: "underscore"
    });


    let plugins = [ENABLE_STATIC_SITE_GENERATOR && !isDev ? staticSiteGeneratorPlugin : htmlWebPackPlugin, miniCssExtractPlugin, providePlugin];

    return {
        entry: "./src/js/index.js",
        output: {
            libraryTarget: "umd",
            publicPath: PUBLIC_PATH
        },
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                ["~"]: path.resolve(__dirname, "src/js"),
                ["__assets__"]: path.resolve(__dirname, "assets")
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ESLINT ? ["babel-loader", "eslint-loader"] : "babel-loader",
                 },
                {
                    test: /\.s?[ac]ss$/,
                    use: [
                        {
                            loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader
                        },
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: false,
                                ident: "postcss",
                                plugins: () => [require("autoprefixer")({})]
                            }
                        }, {
                            loader: "resolve-url-loader",
                            options: {
                                sourceMap: true,
                                debug: false
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [path.resolve(__dirname, "src/scss"), path.resolve(__dirname, "assets/fonts")],
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.ejs$/,
                    loader: "ejs-loader"
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]"
                    }
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]"
                    }
                }
            ]
        },
        plugins: plugins,
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
                        enforce: false
                    }
                }
            }
        }
    };
};
