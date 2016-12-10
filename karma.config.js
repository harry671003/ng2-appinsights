"use strict";

module.exports = (config) => {
    config.set({
        autoWatch: true,
        browsers: ['PhantomJS','Chrome'],
        plugins: [
            require('karma-jasmine'),
            require('karma-webpack'),
            require('karma-sourcemap-loader'),
            require('karma-jasmine-html-reporter'),
            require('karma-htmlfile-reporter'),
            require('karma-phantomjs-launcher'),
            require('karma-chrome-launcher'),
            require('karma-spec-reporter')
        ],
        files: [
            './node_modules/es6-shim/es6-shim.min.js',
            'karma.entry.js'
        ],
        frameworks: ['jasmine'],
        loglevel: config.LOG_INFO,
        preprocessors: {
            'karma.entry.js': ['webpack', 'sourcemap']
        },
        reporters: [ 'spec','dots','kjhtml'],
        singleRun: false,
        webpack: require('./webpack.test.config'),
        webpackServer: {
            noInfo: true
        },
        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
            exitOnResourceError: true
        }
    });
};