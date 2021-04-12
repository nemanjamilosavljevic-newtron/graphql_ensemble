import { __awaiter } from "tslib";
export const resolvers = {
    Book: {
        author: {
            selectionSet: `{ authorId }`,
            resolve: (root, args, { Authors }, info) => __awaiter(void 0, void 0, void 0, function* () {
                return yield Authors.api.author({ id: root.authorId });
            }),
        },
    },
    Author: {
        books: {
            selectionSet: `{ booksIds }`,
            resolve: (root, args, { Books }, info) => __awaiter(void 0, void 0, void 0, function* () {
                const books = root.booksIds.map((bookId) => Books.api.book({ id: bookId }));
                // @ts-ignore
                return yield Promise.all(books);
            }),
        },
    },
};
//# sourceMappingURL=authors-resolver.js.map