import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppService } from "./app.service";

import { UserModule } from "./system/user/user.module";
import { AuthModule } from "./system/auth/auth.module";

import { AppController } from "./app.controller";
import { UserController } from "./system/user/user.controller";
import { BaseController } from "./system/user/base.controller";
import { UserService } from "./system/user/user.service";
import { AuthService } from "./system/auth/auth.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "code_shared",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    // UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
