var webpack = require('webpack');
var PACKAGE = require('./package.json');
var path = require('path');
var yargs = require('yargs');

var libraryName = PACKAGE.name,
    plugins = [],
    outputFile;

if (yargs.argv.p) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}


var config = {
    entry: path.join(__dirname, 'src', 'main.ts'),
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'bundles'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint',
                include: /src/,
            },
        ],
        loaders: [
            {
                test: /\.ts$/,
                include: /src/,
                loader: 'ts',
                query: {
                    silent: true
                }
            },
        ],
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js', '.ts']
    },
    plugins: plugins,

    // Individual Plugin Options
    tslint: {
        emitErrors: true,
        failOnHint: true
    },

    // Externals
    externals: {
        '@angular/core': '@angular/core',
        'reflect-metadata': 'reflect-metadata',
    }
};

module.exports = config;