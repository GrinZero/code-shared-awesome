import Router from "koa-router";

const router = new Router({ prefix: "/public" });

export { router as publicRouter };

import "./auth";
