import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsString({ message: "account 类型错误，正确类型 string" })
  @IsNotEmpty({ message: "account 不能为空" })
  @MinLength(5, { message: "账号至少5个字符" })
  @MaxLength(20, { message: "账号最多20个字符" })
  readonly account: string;

  @IsString({ message: "password 类型错误，正确类型 string" })
  @IsNotEmpty({ message: "password 不能为空" })
  password: string;

  @IsString({ message: " confirmPassword 类型错误，正确类型 string" })
  readonly confirmPassword: string;

  @IsString({ message: "phoneNum 类型错误，正确类型 string" })
  @IsMobilePhone(
    "zh-CN",
    { strictMode: false },
    { message: "请输入正确的手机号" }
  )
  @IsOptional()
  readonly phoneNum?: string;

  @IsString({ message: "email 类型错误，正确类型 string" })
  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @IsString({ message: "avatar 类型错误，正确类型 string" })
  @IsOptional()
  readonly avatar?: string;
}
