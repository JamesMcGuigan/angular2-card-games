FROM node:alpine

#WORKDIR /usr/src/app

ARG npm_key
COPY package.json package-lock.json ./
RUN npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && npm config set "//npm.fontawesome.com/:_authToken" 5E34E1A8-0D79-4BEC-B9EE-AB75A2699514
RUN npm install

COPY . .
RUN npm run build

#EXPOSE 80
#CMD ["npm", "start"]
