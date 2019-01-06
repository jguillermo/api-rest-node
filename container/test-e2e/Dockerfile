FROM node:10.15.0-jessie

COPY ./package.json /app/package.json
COPY ./wait-for-it.sh /tmp/wait-for-it.sh

RUN cd /app && yarn install \
    && chmod +x /tmp/wait-for-it.sh

WORKDIR /app
EXPOSE 4567