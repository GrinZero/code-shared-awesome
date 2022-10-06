import Router from "koa-router";

const router = new Router({ prefix: "/api" });

export { router as apiRouter };

import "./graphql";
