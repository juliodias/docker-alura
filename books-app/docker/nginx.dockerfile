FROM nginx:latest
MAINTAINER Julio Dias

COPY /public /var/www/public
COPY /docker/config/nginx.conf /etc/nginx/conf/nginx.conf

RUN chmod -R 755 /var/www/public
EXPOSE 80 443

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]