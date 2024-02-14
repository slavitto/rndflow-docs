FROM node:16.20 as build-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY ./ .
RUN yarn build

FROM nginx:1.23 as production-stage
COPY --from=build-stage /app/src/.vuepress/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY RELEASE-VERSION app/RELEASE-VERSION
