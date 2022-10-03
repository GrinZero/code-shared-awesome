import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { hash } from "bcryptjs";
import { Result } from "src/common/result";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
    // private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * jwt step2 校验用户信息
   * @param account
   * @param pwd
   * @returns
   */
  async validateUser(account: string, pwd: string): Promise<Result> {
    console.log("jwt step 2");
    // const user = await this.userService.findOneByAccount(account)
    const user = {
      password: "",
      salt: "",
    };
    if (user) {
      const { password, salt } = user;
      const hashPwd = await hash(pwd, salt);
      if (hashPwd === password) {
        return Result.success(user);
      } else {
        return Result.fail(600);
      }
    }
    return Result.fail(600);
  }

  /**
   * jwt step3 处理jwt签证
   */
  async certificate(user: any): Promise<Result> {
    const payload = {
      account: user.account,
      id: user.id,
    };
    try {
      const token = this.jwtService.sign(payload);
      return Result.success(
        {
          token,
        },
        "登录成功"
      );
    } catch (err) {
      return Result.fail(600);
    }
  }
}
