#!/usr/bin/env bash

pwd
ls -la
npm install
npm install --only=dev
ls -la
ls -la ./node_modules/.bin/
npm run now-build
./node_modules/.bin/ng build --prod -c production --aot --output-path ./dist/
