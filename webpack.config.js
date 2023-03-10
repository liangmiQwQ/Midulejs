const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    resolve: {
        extensions: [
            ".js",
            ".ts"
        ]
    },
    // entry: "./src/main.ts",
    entry: "./src/test/test.ts",
    output: {
        path: path.resolve(__dirname,'dev'),
        filename: "midule.test.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },

        ]
    },
    // mode:"development",
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/test/test.html"
        }),
    ]
}