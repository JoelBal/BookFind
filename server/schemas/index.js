const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };




server.listen().then(({ url }) => {
  console.log('🚀 Server at {$url}');
});

module.exports = typeDefs;
