# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:boron

# Create app directory
RUN mkdir -p /var/www/docker-node-js/
WORKDIR /var/www/docker-node-js/

# Install app dependencies
COPY package.json /var/www/docker-node-js/
RUN npm install

# Bundle app source
COPY . /var/www/docker-node-js/

CMD [ "npm", "start" ]
