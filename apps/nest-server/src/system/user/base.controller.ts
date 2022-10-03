import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { Result } from "src/common/result";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUser } from "./dto/login-user.dto";
import { UserService } from "./user.service";

@Controller()
export class BaseController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  async create(@Body() user: CreateUserDto): Promise<Result> {
    return await this.userService.create(user);
  }

  @Post("login")
  async login(@Body() dto: LoginUser): Promise<Result> {
    return await this.userService.login(dto.account, dto.password);
  }
}
