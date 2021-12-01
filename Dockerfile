#stage 1
FROM node:10-alpine as build-step

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=build-step  /app/dist/angular-tour-of-heroes  /usr/share/nginx/html