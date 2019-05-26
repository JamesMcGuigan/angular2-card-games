FROM mhart/alpine-node:10
WORKDIR /usr/src

# set up our npm profile to access private npm modules
#ARG NPM_TOKEN
RUN echo "@fortawesome:registry=https://npm.fontawesome.com/" > ~/.npmrc
RUN echo "npm.fontawesome.com/:_authToken=5E34E1A8-0D79-4BEC-B9EE-AB75A2699514" >> ~/.npmrc

# copy dependencies required for building
COPY package.json package-lock.json ./
RUN npm install
COPY . .
