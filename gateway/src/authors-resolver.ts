type AuthorsType = { api: { author: Function } };

type Type = {
  Book: {
    author: {
      selectionSet: string;
      resolve: (
        root: { authorId: string },
        args: any,
        { Authors }: { Authors: AuthorsType },
        info: any
      ) => Promise<any>;
    };
  };
  Author: {
    books: {
      selectionSet: string;
      resolve: (root: { booksIds: string[] }, args: any, { Books }: { Books: any }, info: any) => Promise<string[]>;
    };
  };
};

export const resolvers: Type = {
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
