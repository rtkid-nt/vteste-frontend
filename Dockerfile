FROM node:18 as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install && npm run build

FROM nginx:latest
COPY --from=build /usr/local/app/dist/vteste-frontend /usr/share/nginx/html