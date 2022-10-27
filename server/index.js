const { ApolloServer } = require("apollo-server");
// const { typeDefs, resolvers } = require("./schema");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`YAHOOO! WE DID IT! ${url}`);
});
