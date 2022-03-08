const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { type } = require("os");

let mode = "development";

if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    entry: "./src/index.tsx",
    mode: mode,
    output: {
        publicPath: "/",
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                type: "asset/inline",
            },
            {
                test: /\.(jpe?g|gif|png)/,
                type: "asset/resource",
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve("swc-loader"),
                        options: {
                            jsc: {
                                parser: {
                                    syntax: "typescript",
                                    tsx: true,
                                },
                                transform: {
                                    react: {
                                        runtime: "automatic",
                                        development: mode === "development",
                                        refresh: mode === "development",
                                    },
                                },
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
        ],
    },
    devtool: mode === "development" && "inline-source-map",
    devServer: {
        port: 8080,
        hot: true,
        historyApiFallback: true,
    },
    optimization: {
        minimize: mode === "production",
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "index.css" }),
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
        new ReactRefreshWebpackPlugin(),
    ],
};
