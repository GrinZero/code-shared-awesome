import { forwardRef, Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";

import { BaseController } from "./base.controller";
import { UserController } from "./user.controller";

import { AuthModule } from "../auth/auth.module";
import { AuthService } from "../auth/auth.service";

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [UserController, BaseController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
