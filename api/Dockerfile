FROM node:14-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 6969

CMD [ "npm", "start" ]

