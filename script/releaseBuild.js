const path = require("path")
const webpack = require("webpack")

console.log(path.resolve(__dirname,"../webpackConfig/webpack.config.rel.sjs.js"))
const ems = require(path.resolve(__dirname, "../webpackConfig/webpack.config.rel.ems.js")),
    cjs = require(path.resolve(__dirname, "../webpackConfig/webpack.config.rel.cjs.js")),
    amd = require(path.resolve(__dirname, "../webpackConfig/webpack.config.rel.amd.js")),
    sjs = require(path.resolve(__dirname, "../webpackConfig/webpack.config.rel.sjs.js")),
    varModule = require(path.resolve(__dirname, "../webpackConfig/webpack.config.rel.var.js")),
    configs = [ems, cjs, amd, sjs, varModule];


configs.forEach((config) => {
    webpack(config, (err, stats) => {
        if(err){
            console.error(err)
        }
        // 打印编译结果
        console.log(stats.toString());
    });
});