
FROM node:16.14.0
LABEL MAINTAINER "774933704@qq.com"
RUN mkdir -p /usr/csa-koa
WORKDIR /usr/csa-koa
COPY package.json /usr/csa-koa
RUN npm i -g pnpm
RUN pnpm i
COPY . /usr/csa-koa
CMD ["npm","run","start"]
EXPOSE 3000
