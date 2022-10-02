/* eslint-disable class-methods-use-this */
import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export default class FooResolver {
  @Query(() => String)
  sayHello() {
    return "Hello World!";
  }
}
