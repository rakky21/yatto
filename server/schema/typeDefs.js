const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    usuario: String!
    lengua: LenguaCodigo
    requisito: String!
    friends: [User]
    visitando: [Vacacion]
  }

  type Vacacion {
    id: ID!
    location: String!
    country: paisesKuni!
    visited: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    vacaciones: [Vacacion!]!
    vacacion(location: String!): Vacacion!
  }
  
  enum paisesKuni {
    CANADA
    JAPAN
    USA
    HONDURAS
    PERU
    ITALY
  }

  enum LenguaCodigo {
    CANVAS
    CSS
    REACT
  }
`;

module.exports = { typeDefs };