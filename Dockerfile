FROM httpd:latest

ADD httpd.conf /usr/local/apache2/conf

RUN mkdir -p /usr/local/apache2/htdocs/react-ui-template

WORKDIR /usr/local/apache2/htdocs/react-ui-template

ADD dist/ .

EXPOSE 80
