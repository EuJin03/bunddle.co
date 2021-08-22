import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    avatar: String!
    username: String!
    email: String!
    age: String!
    gender: String!
    country: String!
    contact: Int
    seller: Boolean
    token: String!
    createdAt: String!
  }
  type Query {
    _dummy: String
  }
  type Mutation {
    login(username: String!, password: String!): User!
  }
`;
