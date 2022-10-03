import { IsString, IsNotEmpty } from "class-validator";

export class LoginUser {
  @IsString({ message: "account 类型错误" })
  @IsNotEmpty({ message: "账号不能为空" })
  readonly account: string;

  @IsString({ message: "password 类型错误" })
  @IsNotEmpty({ message: "密码不能为空" })
  readonly password: string;
}
