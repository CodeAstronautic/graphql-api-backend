const { gql } = require('apollo-server');

module.exports = gql`

  type User {
    id: ID!
    FirstName: String!
    LastName: String!
    email:String!
    Role:String!
  }

  input CreateUserInput {
    FirstName: String!
    LastName: String!
    email:String!
    Role:String!
  }

  input UpdateUserInput {
    FirstName: String
    LastName: String
    email:String!
    Role:String!
  }

  input DeleteUserInput {
    id: ID!
  }

  type DeletePayload{
    id: ID!
  }

  type Query {
    users(id:ID!): [User]
   
  }


  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): DeletePayload!
  }
  
`;
