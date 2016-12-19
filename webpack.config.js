var webpack = require("webpack");
var PACKAGE = require("./package.json");
var path = require("path");
var yargs = require("yargs");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

var libraryName = PACKAGE.name,
    plugins = [
        new CopyWebpackPlugin([
            {
                from: "package.json"
            },
            {
                from: "README.md"
            },
            {
                from: "LICENSE"
            },
        ]),
        new CleanWebpackPlugin(["build"], {
            verbose: true,
            dry: false
        })
    ],
    outputFile;

if (yargs.argv.p) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
    outputFile = path.join(libraryName + ".min.js");
} else {
    outputFile = path.join(libraryName + ".js");
}


var config = {
    entry: path.join(__dirname, "src", "index.ts"),
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "build"),
        filename: "/bundles/" + outputFile,
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: false
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: "tslint",
                include: /src/,
            },
        ],
        loaders: [
            {
                test: /\.ts$/,
                include: /src/,
                loader: "ts",
                query: {
                    silent: true
                }
            },
        ],
    },
    resolve: {
        root: path.resolve("./src"),
        extensions: ["", ".js", ".ts"]
    },
    plugins: plugins,

    // Individual Plugin Options
    tslint: {
        emitErrors: true,
        failOnHint: true
    },

    // Externals
    externals: {
        "@angular/core": "@angular/core",
        "applicationinsights-js": "applicationinsights-js",
    },

    // TS loader
    ts: {
        compilerOptions: {
            "declaration": false,   // We are emiting declarations seperately
        }
    }
};

module.exports = config;