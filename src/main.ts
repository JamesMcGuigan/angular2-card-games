/* tslint:disable:no-string-literal */
/// <reference path="../node_modules/@types/node/index.d.ts" />

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import './globals';
import {hmrBootstrap} from './hmr';

if ( environment.production ) {
  try {
    enableProdMode();
  } catch(exception) {
    console.error('BUGFIX: calling isDevMode() in imports before enableProdMode() throws exception - https://github.com/angular/angular-cli/issues/8340#\n', exception);
  }
}

const bootstrap = () =>
  platformBrowserDynamic().bootstrapModule(AppModule);

console.log('environment', environment);
if ( environment.hmr ) {
  if ( module['hot'] ) {
    module['hot'].accept();
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  if ( !environment.production ) {
    console.log('HMR is not enabled: use ng serve --hmr -c hmr');
  }
  bootstrap().catch(err => console.log(err));
}
