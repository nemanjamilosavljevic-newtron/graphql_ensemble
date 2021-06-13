const { loadSchemaSync } = require("@graphql-tools/load");
const { join } = require("path");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { addResolversToSchema } = require("@graphql-tools/schema");

const schemaDef = loadSchemaSync(join(__dirname, "../books.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

// Data store
const books = [
  { id: 1, authorId: 1, title: "The Conan Chronicles" },
  { id: 2, authorId: 1, title: "The Wheel of Time" },
  { id: 10, authorId: 2, title: "IT" },
  { id: 11, authorId: 2, title: "The Stand" },
  { id: 12, authorId: 2, title: "11/22/63" },
] as const;

const resolvers = {
  Query: {
    books: () => books.map(({ authorId, ...rest }) => rest),

    book: (_, { id }) => {
      console.log("Book Id: ", id);
      console.log(
        "Found book: ",
        books.find((book) => book.id === Number(id))
      );

      // @ts-ignore // authorId might be accessed from undefined due to the find method, but at the moment we don't care about it
      const { authorId, ...rest } = books.find(
        (book) => book.id === Number(id)
      );

      return rest;
    },
    author: (_, { id }) => {
      console.log("Author Id: ", id);
      console.log(
        "Found books: ",
        books.filter((book) => book.authorId === Number(id))
      );

      return {
        id,
        books: books.filter((book) => book.authorId === Number(id)),
      };
    },
  },
};

module.exports = addResolversToSchema({
  schema: schemaDef,
  resolvers,
});
