/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      "npm:": "node_modules/"
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: "app",
      // angular bundles
      "@angular/core": "npm:@angular/core/bundles/core.umd.js",
      "@angular/router": "npm:@angular/router/bundles/router.umd.js",
      "@angular/common": "npm:@angular/common/bundles/common.umd.js",
      "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
      "@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
      "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
      // other libraries
      "rxjs":                       "npm:rxjs",
      "ng2-appinsights": "npm:ng2-appinsights",
      "applicationinsights-js": "npm:applicationinsights-js",
      "reflect-metadata": "npm:reflect-metadata"
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: "../build/main.js",
        defaultExtension: "js"
      },
      rxjs: {
        defaultExtension: "js"
      },
      "applicationinsights-js": {
        defaultExtension: "js",
        main: "JavaScript/JavaScriptSDK.Module/AppInsightsModule.js"
      },
      "ng2-appinsights": {
        main: "index.js",
        defaultExtension: "js"
      }
    }
  });
})(this);