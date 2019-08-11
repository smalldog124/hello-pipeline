FROM nginx:1.15.7-alpine
COPY ./dist/frontend /usr/share/nginx/html