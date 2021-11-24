FROM node:latest as build-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY ./ .
RUN yarn build

FROM nginx as production-stage
COPY --from=build-stage /app/src/.vuepress/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
