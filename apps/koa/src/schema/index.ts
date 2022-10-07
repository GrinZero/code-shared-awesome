import { GraphQLSchema, GraphQLObjectType } from "graphql";
import {
  article,
  articles,
  createArticle,
  updateArticle,
  deleteArticle,
} from "./articleSchema";

import { mergeSchemaStore } from "./schemaStore";
import userQuerySchema from "./userSchema";

const query = mergeSchemaStore(userQuerySchema).finish({
  name: "Query",
});

// const query = new GraphQLObjectType({
//   name: "Query",
//   fields: () => ({
//     article,
//     articles,
//   }),
// });

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createArticle,
    updateArticle,
    deleteArticle,
  }),
});

const schema = new GraphQLSchema({
  query,
  mutation,
});
export default schema;
