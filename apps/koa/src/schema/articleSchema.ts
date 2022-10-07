import {
  GraphQLObjectType as GObject,
  GraphQLList as GArray,
  GraphQLString as GString,
  GraphQLInt as GInt,
} from "graphql";
import GLong from "graphql-type-long";

import { command } from "../service/mysql";
import { FieldStore } from "./fieldStore";

const articleType = new GObject({
  name: "article",
  description: "文章对象",
  fields() {
    return {
      id: { type: GInt },
      userId: { type: GInt },
      title: { type: GString },
      introduce: { type: GString },
      category: { type: GString },
      tag: { type: GString },
      content: { type: GString },
      createTime: { type: GLong },
      updateTime: { type: GLong },
      pv: { type: GInt },
      status: { type: GInt },
      sort: { type: GInt },
    };
  },
});

const articleSchemaStore = new FieldStore();

articleSchemaStore
  .add("article", {
    type: articleType,
    args: {
      id: { type: GInt },
    },
    resolve: async (_, { id }) => {
      return (await command(`SELECT * FROM article where id=?`, [id]))
        ?.results[0];
    },
  })
  .add("articles", {
    type: new GArray(articleType),
    args: {
      pageIndex: {
        type: GInt,
      },
      pageSize: {
        type: GInt,
      },
      category: {
        type: GInt,
      },
    },
    resolve: async () => {
      return (await command(`SELECT * FROM article`))?.results || [];
    },
  })
  .add("createArticle", {
    type: articleType,
    args: {
      title: { type: GString },
      introduce: { type: GString },
      category: { type: GString },
      tag: { type: GString },
      content: { type: GString },
      status: { type: GInt },
      sort: { type: GInt },
    },
    resolve: async (_, args) => {
      const {
        userId = -1,
        title,
        introduce,
        category,
        tag,
        content,
        status,
        sort,
      } = args;
      return (
        await command(
          `INSERT INTO article (
            \`userId\`,
            \`title\`,
            \`introduce\`,
            \`category\`,
            \`tag\`,
            \`content\`,
            \`createTime\`,
            \`updateTime\`,
            \`pv\`,
            \`status\`,
            \`sort\`
            )
            VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                NOW(),
                NOW(),
                0,
                ?,
                ?
          )`,
          [userId, title, introduce, category, tag, content, status, sort]
        )
      )?.state;
    },
  })
  .add("updateArticle", {
    type: articleType,
    args: {
      id: { type: GInt },
      title: { type: GString },
      introduce: { type: GString },
      category: { type: GString },
      tag: { type: GString },
      content: { type: GString },
      pv: { type: GInt },
      status: { type: GInt },
      sort: { type: GInt },
    },
    resolve: async (_, args) => {
      const { title, introduce, category, tag, content, pv, status, sort, id } =
        args;
      return (
        await command(
          `UPDATE article SET
            \`title\`=?,
            \`introduce\`=?,
            \`category\`=?,
            \`tag\`=?,
            \`content\`=?,
            \`updateTime\`=NOW(),
            \`pv\`=?,
            \`status\`=?,
            \`sort\`=?
            WHERE id=?;
          `,
          [title, introduce, category, tag, content, pv, status, sort, id]
        )
      )?.state;
    },
  })
  .add("deleteArticle", {
    type: articleType,
    args: {
      id: { type: GInt },
    },
    resolve: async (_, { id }) => {
      return (await command(`DELETE from article WHERE id=?`, [id]))?.state;
    },
  });

export default articleSchemaStore;
