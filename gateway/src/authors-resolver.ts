import { Resolvers } from './generated/mesh';

export const resolvers: Resolvers = {
  Book: {
    author: {
      selectionSet: `{ authorId }`,
      resolve: async (root, args, { Authors }, info) => {
        return await Authors.api.author({ id: root.authorId });
      },
    },
  },
  Author: {
    books: {
      selectionSet: `{ booksIds }`,
      resolve: async (root, args, { Books }, info) => {
        const books = root.booksIds.map((bookId) => Books.api.book({ id: bookId }));
        // @ts-ignore
        return await Promise.all(books);
      },
    },
  },
};
