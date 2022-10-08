import { GraphQLSchema, GraphQLObjectType } from "graphql";
import {
  article,
  articles,
  createArticle,
  updateArticle,
  deleteArticle,
} from "./articleSchema";

import { mergeFieldStore } from "./fieldStore";
import { userQuerySchema } from "./userSchema";
import { commentQuerySchema } from "./commentSchema";

const publicQuery = mergeFieldStore(userQuerySchema, commentQuerySchema).finish(
  {
    name: "PublicQuery",
  }
);
const publicMutation = new GraphQLObjectType({
  name: "PublicMutation",
  fields: () => ({
    createArticle,
    updateArticle,
    deleteArticle,
  }),
});
const publicSchema = new GraphQLSchema({
  query: publicQuery,
  mutation: publicMutation,
});

const privateQuery = mergeFieldStore(userQuerySchema).finish({
  name: "PrivateQuery",
});
const privateMutation = new GraphQLObjectType({
  name: "PrivateMutation",
  fields: () => ({
    createArticle,
    updateArticle,
    deleteArticle,
  }),
});

const privateSchema = new GraphQLSchema({
  query: privateQuery,
  mutation: privateMutation,
});

export { publicSchema, privateSchema };
