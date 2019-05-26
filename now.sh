#!/usr/bin/env bash

PATH="./node_modules/.bin/:$PATH"
npm install
npm install --only=dev
ls -la ./node_modules/.bin/
npm run now-build
