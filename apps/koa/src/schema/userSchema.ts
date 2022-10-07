import {
  GraphQLObjectType as GObject,
  GraphQLString as GString,
  GraphQLInt as GInt,
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

const userSchemaStore = new FieldStore();

userSchemaStore.add("user", {
  type: userType,
  args: {
    id: { type: GInt },
  },
  resolve: async (_, { id }) => {
    return (await command(`SELECT * FROM user where id=?`, [id])).results[0];
  },
});

export default userSchemaStore;
