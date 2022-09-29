
FROM node:17.3.1
LABEL MAINTAINER "774933704@qq.com"
RUN mkdir -p /usr/src/csa-koa
WORKDIR /usr/src/csa-koa
COPY package.json /usr/src/csa-koa
RUN npm i -g pnpm
RUN pnpm i
COPY . /usr/src/csa-koa
CMD ["./start.sh"]
EXPOSE 3000
