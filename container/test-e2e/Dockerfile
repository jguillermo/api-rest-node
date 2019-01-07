FROM node:10.15.0-jessie

COPY ./package.json /app/package.json
COPY ./wait-for-it.sh /tmp/wait-for-it.sh
COPY ./runtest.sh /app/runtest.sh

RUN cd /app && yarn install \
    && chmod +x /tmp/wait-for-it.sh \
    && chmod +x /app/runtest.sh

COPY ./request /app/request

WORKDIR /app
EXPOSE 4567