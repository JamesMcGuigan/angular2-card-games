#!/usr/bin/env bash

npm install
npm install --only=dev
ls -la
npm run now-build
