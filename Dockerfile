FROM node:9.4-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
RUN apk update && apk upgrade

COPY . /usr/src/app/
RUN yarn install

# Build app
RUN npm run build

EXPOSE 3000

# start command
CMD [ "npm", "start" ]