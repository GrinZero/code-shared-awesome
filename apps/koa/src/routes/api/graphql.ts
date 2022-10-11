import { apiRouter } from "./index";

apiRouter.get("/hello", async (ctx, next) => {
  ctx.body = "graphql get";
});
