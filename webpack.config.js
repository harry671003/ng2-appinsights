const webpack = require("webpack");
const PACKAGE = require("./package.json");
const path = require("path");
const yargs = require("yargs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const libraryName = PACKAGE.name;

let plugins = [
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
    ])
];

if (yargs.argv.p) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
    outputFile = path.join(libraryName + ".min.js");
} else {

    // Clean only during dev build
    plugins.push(
        new CleanWebpackPlugin(["build"], {
            verbose: true,
            dry: false
        })
    );
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