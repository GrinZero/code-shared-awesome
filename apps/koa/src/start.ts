// eslint-disable-next-line turbo/no-undeclared-env-vars
process.env.TZ = "Asia/Shanghai";

import "./extension";

import { app } from "./app";

import { ApolloServer } from "apollo-server-koa";
import { publicSchema, privateSchema } from "./schema";

const publicServer = new ApolloServer({
  schema: publicSchema,
});
const privateServer = new ApolloServer({
  schema: privateSchema,
});

// 启动服务监听本地3000端口

(async () => {
  await publicServer.start();
  await privateServer.start();
  publicServer.applyMiddleware({ app, path: "/public/graphql" });
  privateServer.applyMiddleware({ app, path: "/api/graphql" });
  app.listen(3000, () => {
    console.log("应用已经启动，http://localhost:3000");
    console.log("无需认证的GQL已经启动，http://localhost:3000/public/graphql");
    console.log("需认证的GQL已经启动，http://localhost:3000/api/graphql");
  });
})();
