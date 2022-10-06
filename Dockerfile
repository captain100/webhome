# node 版本
FROM node:16

WORKDIR /webhome

ADD . /webhome

RUN npm install && npm run build && npm install -g http-server

EXPOSE 8096

CMD http-server ./dist -p 8096