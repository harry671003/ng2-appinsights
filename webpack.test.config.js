'use strict';

const path = require('path');
const webpack = require('webpack');
const rootDir = __dirname;

module.exports = {
    devtool: 'inline-source-map',
    
    module: {
        preLoaders: [
            { exclude: /node_modules/, loader: 'tslint', test: /\.ts$/ },
        ],
        loaders: [
            { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules'],
        root: path.resolve('.', 'e2e')
    },
    tslint: {
        emitErrors: true
    },
    ts: {
        configFileName: './tsconfig.test.json'
    }
};