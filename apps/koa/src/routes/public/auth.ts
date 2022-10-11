import { publicRouter } from "./index";

import { JwtConfig } from "../../config";
import { command } from "../../service/mysql";
import { sign } from "jsonwebtoken";

publicRouter.post("/auth", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const { results } = await command(
    `select * from user where username = '${username}' and password = '${password}'`
  );
  if (results.length === 1) {
    const { id } = results[0];
    const token = sign({ name: username, id }, JwtConfig.secret, {
      expiresIn: "120d",
    });
    await command(
      `update user set updateTime = '${new Date().getTime()}' where id = ${id}`
    );
    ctx.body = { token };
  } else {
    ctx.body = { error: "用户名或密码错误" };
  }
});
