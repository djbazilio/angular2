(function (global) {
  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      //'npm:': 'https://unpkg.com/',
      'npm:': 'http://'+location.host+'/',
      //'server': 'http://192.168.10.100/node_modules'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      'angular/core': 'npm:node_modules/angular/core/bundles/core.umd.js',
      'angular/common': 'npm:node_modules/angular/common/bundles/common.umd.js',
      'angular/compiler': 'npm:node_modules/angular/compiler/bundles/compiler.umd.js',
      'angular/platform-browser': 'npm:node_modules/angular/platform-browser/bundles/platform-browser.umd.js',
      'angular/platform-browser-dynamic': 'npm:node_modules/angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      'angular/http': 'npm:node_modules/angular/http/bundles/http.umd.js',
      'angular/router': 'npm:node_modules/angular/router/bundles/router.umd.js',
      'angular/forms': 'npm:node_modules/angular/forms/bundles/forms.umd.js',
      'angular/upgrade': 'npm:node_modules/angular/upgrade/bundles/upgrade.umd.js',
      'ng2-bootstrap/ng2-bootstrap': 'npm:node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',

      // other libraries
      'rxjs':                      'npm:node_modules/rxjs',
      'moment':                    'npm:node_modules/moment/moment.js',
      'angular-in-memory-web-api': 'npm:node_modules/angular-in-memory-web-api',
      'ts':                        'npm:typings/plugin-typescript/plugin-typescript.js',
      'typescript':                'npm:typings/typescript.js',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './app/main.3.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);

