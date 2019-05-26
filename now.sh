#!/usr/bin/env bash

npm install
npm install --only=dev
ls -la ./node_modules/.bin/
npm run now-build
