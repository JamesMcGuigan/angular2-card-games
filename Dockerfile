# DOCS: https://zeit.co/blog/build-env

FROM mhart/alpine-node:10 as base
RUN node --version
RUN npm --version

ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
WORKDIR /usr/src
COPY package.json package-lock.json /usr/src/
RUN npm install
COPY . .
RUN npm run build
