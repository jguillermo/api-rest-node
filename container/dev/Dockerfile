FROM node:10.15.0-jessie

# Create app directory
WORKDIR /application

RUN mkdir /nodecache && chmod 777 -R /nodecache && npm config set cache /nodecache --global

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package.json ./
#COPY yarn.lock ./

#RUN yarn install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
#COPY . .

EXPOSE 80
#CMD [ "./node_modules/nodemon/bin/nodemon.js" ]
#CMD [ "pwd" ]