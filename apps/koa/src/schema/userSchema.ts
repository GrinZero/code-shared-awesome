import {
  GraphQLObjectType as GObject,
  GraphQLString as GString,
  GraphQLInt as GInt,
  GraphQLList as GList,
} from "graphql";
import GLong from "graphql-type-long";

import { command } from "../service/mysql";
import { FieldStore } from "./fieldStore";

const userType = new GObject({
  name: "user",
  description: "用户对象",
  fields() {
    return {
      id: { type: GInt },
      username: { type: GString },
      password: { type: GString },
      nickName: { type: GString },
      avatar: { type: GString },
      introduce: { type: GString },
      createTime: { type: GLong },
      updateTime: { type: GLong },
    };
  },
});

const userQuerySchema = new FieldStore();

userQuerySchema.add("user", {
  type: userType,
  args: {
    id: { type: GInt },
  },
  resolve: async (_, { id }) => {
    return (await command(`SELECT * FROM user where id=?`, [id])).results[0];
  },
});

userQuerySchema.add("users", {
  type: new GList(userType),
  resolve: async (_, { id }) => {
    return (await command(`SELECT * FROM user limit 100`, [id])).results;
  },
});

export { userQuerySchema };
