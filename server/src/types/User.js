const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    FirstName: String!
    LastName: String!
    email: String!
    role: String!
  }

  input CreateUserInput {
    FirstName: String!
    LastName: String!
    email: String!
    role: String!
  }
  input UpdateUserInput {
    FirstName: String!
    LastName: String!
    email: String!
    role: String!
  }

  input DeleteUserInput {
    id: ID!
  }

  type DeletePayload {
    id: ID!
  }

  type SearchPayload {
    id: ID!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): DeletePayload!
    searchUser(id: ID!): SearchPayload!
  }
`;

