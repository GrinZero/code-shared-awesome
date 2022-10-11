import {
  GraphQLObjectType as GObject,
  GraphQLString as GString,
  GraphQLInt as GInt,
  GraphQLList as GList,
} from "graphql";
import GLong from "graphql-type-long";

import { command } from "../service/mysql";
import { FieldStore } from "./fieldStore";

const commentType = new GObject({
  name: "comment",
  description: "评论对象",
  fields() {
    return {
      id: { type: GLong },
      articleID: { type: GLong },
      content: { type: GString },

      from_uname: { type: GString },
      from_uid: { type: GInt },
      from_uavatar: { type: GString },
      to_uname: { type: GString },
      to_uid: { type: GInt },
      to_uavatar: { type: GString },

      oldContent: { type: GString },
      oldID: { type: GLong },

      status: { type: GInt },
      createTime: { type: GLong },
      updateTime: { type: GLong },
    };
  },
});

const commentQuerySchema = new FieldStore();

commentQuerySchema.add("comment", {
  type: commentType,
  args: {
    id: { type: GInt },
  },
  resolve: async (_, { id }) => {
    return (await command(`SELECT * FROM comment where id=?`, [id])).results[0];
  },
});

commentQuerySchema.add("comments", {
  type: new GList(commentType),
  args: {
    articleID: { type: GInt },
    limit: { type: GInt },
    orderBy: { type: GString },
  },
  resolve: async (_, { articleID, limit = 100, orderBy = "id DESC" }) => {
    return (
      await command(
        `SELECT * FROM comment
        WHERE articleID=?
        ORDER BY ? LIMIT ?`,
        [articleID, orderBy, limit]
      )
    ).results;
  },
});

export { commentQuerySchema };
