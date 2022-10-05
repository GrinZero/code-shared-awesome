import { gql } from "apollo-server-koa";

const typeDefs = gql`
  type Article {
    id: Int
    type: Int
    title: String
    time: String
    user: String
    introduce: String
    getLikes: Int
    comment: Int
    code: String
  }

  type Query {
    articles: [Article]
    article(id: Int!): Article
  }
`;

export default typeDefs;
