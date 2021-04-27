const { loadSchemaSync } = require('@graphql-tools/load');
const { join } = require('path');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { addResolversToSchema } = require('@graphql-tools/schema');
const faker = require('faker');

const schemaDef = loadSchemaSync(join(__dirname, '../authors.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

// Data store //
let authors = [
  { id: 1, name: 'Robert Jordan', booksIds: [1, 2] },
  { id: 2, name: 'Stephen King', booksIds: [10, 11, 12] },
];

const resolvers = {
  Query: {
    authors: () => {
      return authors.map(({booksIds, ...rest}) => rest)
    },
    author: (_, { id }) => {
      if (!id) throw new Error(`Missing mandatory property id: ${id}`);

      const {booksIds, ...rest} = authors.find((author) => Number(author.id) === Number(id));
      console.log('Author ID: ', id);
      console.log('Authors: ', authors);
      console.log('Found author: ', rest);
      return rest;
    },
  },

  Mutation: {
    createAuthor: (_, { authorCreateInput }) => {
      if (!authorCreateInput) throw new Error(`Missing authorCreateInput: ${authorCreateInput}`);

      const newAuthor = { id: faker.datatype.uuid, name: authorCreateInput.name, booksIds: authorCreateInput.booksIds };
      console.log('Author create input: ', authorCreateInput);
      console.log('New author: ', newAuthor);
      authors.push(newAuthor);
      return newAuthor;
    },

    updateAuthor: (_, { id, authorUpdateInput }) => {
      if (!id) throw new Error(`Missing mandatory property id: ${id}`);
      console.log('updateAuthor: ', id, authorUpdateInput);

      authors = authors.map((author) => {
        if (Number(author.id) === Number(id)) {
          return { ...author, ...authorUpdateInput };
        }
        return author;
      });

      return authors.find((author) => Number(author.id) === Number(id));
    },
  },
};

module.exports = addResolversToSchema({
  schema: schemaDef,
  resolvers,
});
