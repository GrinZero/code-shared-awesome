import { Article } from "../controller";
import {
  GraphQLObjectType, //对象类型
  GraphQLList, //数组类型
  GraphQLString as String, //字符串类型
  GraphQLInt as Int, //int类型
  GraphQLBoolean as Boolean,
  // GraphQLNonNull, // 必传
} from "graphql";

const articleType = new GraphQLObjectType({
  name: "article",
  description: "文章对象",
  fields() {
    return {
      id: { type: Int },
      type: { type: Int },
      title: { type: String },
      time: { type: String },
      user: { type: String },
      introduce: { type: String },
      getLikes: { type: Int },
      comment: { type: Int },
      code: { type: String },
    };
  },
});

const article = {
  name: "article",
  type: articleType,
  args: {
    id: {
      name: "id",
      type: Int,
    },
  },
  async resolve(root: any, { id = -1 }: any, options: any) {
    return await Article.findOne(id);
  },
};
const articles = {
  name: "articles",
  type: new GraphQLList(articleType),
  args: {
    pageIndex: {
      name: "pageIndex",
      type: Int,
    },
    pageSize: {
      name: "pageSize",
      type: Int,
    },
    // 分类
    type: {
      name: "type",
      type: Int,
    },
  },
  async resolve(
    root: any,
    { pageIndex = 1, pageSize = 5, type = 1 }: any,
    options: any
  ) {
    return await Article.findAll({
      pageIndex,
      pageSize,
      type,
    });
  },
};
const createArticle = {
  name: "createArticle",
  type: articleType,
  args: {
    type: { name: "type", type: Int },
    title: { name: "title", type: String },
    time: { name: "time", type: String },
    user: { name: "user", type: String },
    introduce: { name: "introduce", type: String },
    getLikes: { name: "getLikes", type: Int },
    comment: { name: "comment", type: Int },
    code: { name: "code", type: String },
  },
  async resolve(root: any, args: any, options: any) {
    return await Article.create(args);
  },
};
const updateArticle = {
  name: "updateArticle",
  type: articleType,
  args: {
    type: { name: "type", type: Int },
    title: { name: "title", type: String },
    time: { name: "time", type: String },
    user: { name: "user", type: String },
    introduce: { name: "introduce", type: String },
    getLikes: { name: "getLikes", type: Int },
    comment: { name: "comment", type: Int },
    code: { name: "code", type: String },
  },
  async resolve(root: any, args: any, options: any) {
    return await Article.update(args);
  },
};
const deleteArticle = {
  name: "deleteArticle",
  type: Boolean,
  args: {
    id: {
      name: "id",
      type: Int,
    },
  },
  async resolve(root: any, args: any, options: any) {
    return await Article.delete(args);
  },
};

export { article, articles, createArticle, updateArticle, deleteArticle };
