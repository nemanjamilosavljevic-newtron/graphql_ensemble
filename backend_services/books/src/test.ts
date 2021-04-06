const { createModule, createApplication } = require('graphql-modules');

export const Books = createModule({
  id: 'my-module',
  dirname: __dirname,
  typeDefs: [
    `type Query {
      hello: String!
    }`,
  ],
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
});

export const application = createApplication({
  modules: [Books],
});
