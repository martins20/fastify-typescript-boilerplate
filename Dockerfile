FROM node:alpine

WORKDIR /usr/fastify-boilerplate/api

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start:prod"]