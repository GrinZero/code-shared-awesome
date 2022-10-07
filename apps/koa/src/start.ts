// eslint-disable-next-line turbo/no-undeclared-env-vars
process.env.TZ = "Asia/Shanghai";

import "./extension";

import { app } from "./app";

import { ApolloServer } from "apollo-server-koa";
import schema from "./schema";

const server = new ApolloServer({
  schema,
});

// 启动服务监听本地3000端口

(async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(3000, () => {
    console.log("应用已经启动，http://localhost:3000");
    console.log("GQL已经启动，http://localhost:3000/graphql");
  });
})();
