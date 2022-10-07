// app.js

import Koa from "koa";
import jwt from "koa-jwt";
import koaBody from "koa-body";

import { JwtConfig } from "./config";

const app = new Koa();

app.use(koaBody());
app.use((ctx, next) => {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = "Protected resource, use Authorization header to get access\n";
    } else {
      throw err;
    }
  });
});

import { publicRouter, apiRouter } from "./routes";
app.use(apiRouter.routes()).use(apiRouter.allowedMethods());
app.use(publicRouter.routes()).use(publicRouter.allowedMethods());

app.use(
  jwt({
    secret: JwtConfig.secret,
    debug: true,
  }).unless({ path: [/^\/public/, /^\/graphql/] })
);

export { app };
