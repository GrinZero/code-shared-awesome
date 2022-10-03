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

import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import FooResolver from "./app.resolver";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "code_shared",
      password: "code_shared",
      database: "code_shared",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    // UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, FooResolver],
})
export class AppModule {}
