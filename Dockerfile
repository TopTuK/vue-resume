FROM nginx

COPY ./website /usr/share/nginx/html
COPY ./certs /etc/ssl
COPY nginx.conf /etc/nginx/nginx.conf