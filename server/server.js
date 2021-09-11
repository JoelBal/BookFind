const express = require('express');
const path = require('path');
const db = require('./server/config/connection');
const path = require('./path');
// Require Apollo Server Express
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./server/schemas');
const { authMiddleware } = require('./server/utils/auth');
const { createConnection } = require('net');
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: authMiddleware,
});


server.applyMiddleware({ app });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen({ port: 4000}, () => {
    // console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
 
startServer();