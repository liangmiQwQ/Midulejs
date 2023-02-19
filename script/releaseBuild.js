const webpack = require("webpack")
const path = require("path")

const ems = {
    resolve: {
        extensions: [
            ".js",
            ".ts"
        ]
    },
    entry: "./src/main.ts",
    // entry: "./src/test/test.ts",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "midule.ems.js",
        libraryTarget: `module`
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

const configs = [ems];


configs.forEach((config) => {
    try {
        webpack(config, (err, stats) => {
            if (err) {
                console.error(err);
            }
            // 打印编译结果
            console.log(stats.toString());
        });
    } catch (error) {
        console.error(error);

    }
});