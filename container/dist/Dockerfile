FROM node:10.15.0-jessie AS build
WORKDIR /application
COPY . .
RUN yarn install
RUN /application/node_modules/.bin/tsc
RUN rm -rf node_modules
ENV NODE_ENV production
RUN yarn install


FROM node:10.15.0-alpine
WORKDIR /application
EXPOSE 80
COPY --from=build /application/node_modules /application/node_modules
COPY --from=build /application/dist /application/src
COPY --from=build /application/package.json /application/package.json
ENTRYPOINT ["node", "dist/index"]