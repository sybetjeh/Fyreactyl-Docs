FROM node:16

WORKDIR /build

RUN npm install

RUN npm build

EXPOSE 3000

CMD ["npm","build"]
