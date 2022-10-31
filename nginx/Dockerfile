FROM nginx:latest

COPY html/blog/dist/ /usr/share/nginx/html

COPY ./configs/default.conf /etc/nginx/conf.d/default.conf

COPY ./configs/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT [ "/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]