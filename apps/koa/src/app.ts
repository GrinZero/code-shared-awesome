// app.js

import Koa from "koa";
import Router from "koa-router";
import jwt from "koa-jwt";
import koaBody from "koa-body";

const secret = "mock-sercet";

const app = new Koa();
const router = new Router();

router.get("/", async (ctx: { type: string; body: string }) => {
  ctx.type = "html";
  ctx.body = "<h1>hello world!</h1>";
});
router.post("/auth", async (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "test";
});

router.use(
  jwt({
    secret,
    debug: true,
  })
);

app.use(koaBody()).use(router.routes()).use(router.allowedMethods());

export { app, router };
