const path = require("path")

module.exports = {
    resolve: {
        extensions: [
            ".js",
            ".ts"
        ]
    },
    entry: "./src/main.ts",
    // entry: "./src/test/test.ts",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "midule.js",
        libraryTarget: `"var"`
    },
    experiments: {
        outputModule: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|script|webpackConfig/,
                loader: "babel-loader",
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules|script|webpackConfig/
            },

        ]
    },
    // mode:"development",
    mode: "production",
}