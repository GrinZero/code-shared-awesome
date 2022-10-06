import { apiRouter } from "./index";

apiRouter.get("/graphql", async (ctx, next) => {
  ctx.body = "graphql get";
});

apiRouter.post("/graphql", async (ctx, next) => {
  ctx.body = "graphql post";
});
