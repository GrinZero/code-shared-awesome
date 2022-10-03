import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Result } from "src/common/result";
import { validEmail, validPhone } from "src/common/validData";

import { Codes } from "src/types/codeTypes.enum";

import { Repository } from "typeorm";
import { genSalt, hash, compare } from "bcryptjs";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { UserEntity } from "./entities/user.entity";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { encryptPassword, makeSalt } from "src/common/cryptogram";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly authService: AuthService
  ) {}

  async findOneByAccount(account: string): Promise<UserEntity> {
    try {
      return await this.userRepository.findOneBy({ account });
    } catch (error) {
      return void 0;
    }
  }

  async findOneByPhoneNum(phoneNum: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ phoneNum });
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ email });
  }

  /**
   * 创建用户
   * @param userDto 注册信息实体
   * @returns 注册后的信息
   */
  async create(userDto: CreateUserDto): Promise<Result> {
    if (userDto.password !== userDto.confirmPassword) {
      return Result.fail(Codes.CONFIRM_PWD_ERROR, "两次输入密码不一致");
    }

    if (await this.findOneByAccount(userDto.account)) {
      return Result.fail(Codes.ACCOUNT_EXISTED_ERROR, "账号已经存在，请调整！");
    }

    const salt = makeSalt();

    userDto.password = encryptPassword(userDto.password, salt);

    try {
      const user = plainToInstance(
        UserEntity,
        { salt, ...userDto },
        { ignoreDecorators: true }
      );
      const result = await this.userRepository.save(user);
      return Result.success(instanceToPlain(result), "注册成功");
    } catch (error) {
      return Result.fail(503);
    }
  }

  /**
   * 登录
   * account 有可能是 帐号/手机/邮箱
   */
  async login(account: string, password: string): Promise<Result> {
    const authResult = await this.authService.validateUser(account, password);
    console.log(authResult);
    switch (authResult.code) {
      case 200:
        return this.authService.certificate(authResult.data.user);
      case 600:
        return Result.fail(600);
    }
    // let user = null

    // if (validPhone(account)) { // 手机登录
    //   user = await this.findOneByPhoneNum(account)
    // } else if (validEmail(account)) { // 邮箱
    //   user = await this.findOneByEmail(account)
    // } else { // 帐号
    //   user = await this.findOneByAccount(account)
    // }

    // if (!user) return Result.fail(Codes.LOGIN_INFO_ERROR, '帐号或密码错误')

    // const checkPassword = await compare(password, user.password)
    // if (!checkPassword) return Result.fail(Codes.LOGIN_INFO_ERROR, '帐号或密码错误')

    // // const token = this.jwtService.sign({id: user.id})

    // delete user.password
    // delete user.salt

    return Result.success({}, "登录成功");
  }

  async findAll() {
    return await this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
