import * as core from '@angular/core';
import {isDevMode} from '@angular/core';
import * as common from '@angular/common';
import * as compiler from '@angular/compiler';
import * as browser from '@angular/platform-browser';
import * as browserd from '@angular/platform-browser-dynamic';

if (isDevMode()) {
  window['@angular/core'] = core;
  window['@angular/common'] = common;
  window['@angular/compiler'] = compiler;
  window['@angular/platform-browser'] = browser;
  window['@angular/platform-browser-dynamic'] = browserd;
}
