"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const tslib_1 = require("tslib");
exports.resolvers = {
    Book: {
        author: {
            selectionSet: `{ authorId }`,
            resolve: (root, args, { Authors }, info) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return yield Authors.api.author({ id: root.authorId });
            }),
        },
    },
    Author: {
        books: {
            selectionSet: `{ booksIds }`,
            resolve: (root, args, { Books }, info) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                const books = root.booksIds.map((bookId) => Books.api.book({ id: bookId }));
                // @ts-ignore
                return yield Promise.all(books);
            }),
        },
    },
};
