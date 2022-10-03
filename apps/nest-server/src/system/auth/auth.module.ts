import { forwardRef, Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { jwtKey } from "src/config/jwt";
import { UserEntity } from "../user/entities/user.entity";

import { UserModule } from "../user/user.module";
import { UserService } from "../user/user.service";

import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: jwtKey.secret,
      signOptions: { expiresIn: "2h" },
    }),
  ],
  providers: [AuthService, JwtService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
