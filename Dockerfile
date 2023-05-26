FROM nginx

COPY ./dist /usr/share/nginx/html
COPY ./certs /etc/ssl
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80