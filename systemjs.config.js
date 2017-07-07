(function (global){
    System.config({
        paths: {
            //alias for paths
            'npm:': '/node_modules/'
        },
        map: {
            app: 'app',
            //angular bundles
           
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min.js',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            //'@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

            //other libraries
            'rxjs': 'npm:rxjs',
        },
        //packages tell system loader how to load when there is no filename/extension
        packages: {
            app: {
                main: 'main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);