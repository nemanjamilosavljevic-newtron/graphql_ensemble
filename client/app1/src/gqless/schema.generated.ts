/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface AuthorCreate {
  name: Scalars["String"];
  booksIds: Array<Scalars["ID"]>;
}

export interface AuthorUpdate {
  name?: Maybe<Scalars["String"]>;
  booksIds?: Maybe<Array<Scalars["ID"]>>;
}

export const scalarsEnumsHash: import("gqless").ScalarsEnumsHash = {
  ID: true,
  String: true,
  Int: true,
  Boolean: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    books: { __type: "[Book!]!" },
    book: { __type: "Book!", __args: { id: "ID!" } },
    author: { __type: "Author!", __args: { id: "ID!" } },
    authors: { __type: "[Author!]!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createAuthor: {
      __type: "Author!",
      __args: { authorCreateInput: "AuthorCreate!" },
    },
    updateAuthor: {
      __type: "Author!",
      __args: { id: "ID!", authorUpdateInput: "AuthorUpdate!" },
    },
  },
  subscription: {},
  Book: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    title: { __type: "String!" },
    numberOfPages: { __type: "Int!" },
    coverType: { __type: "String" },
    releaseYear: { __type: "Int" },
    itemsSold: { __type: "Int" },
    size: { __type: "String!" },
  },
  Author: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    books: { __type: "[Book!]" },
    name: { __type: "String!" },
  },
  AuthorCreate: { name: { __type: "String!" }, booksIds: { __type: "[ID!]!" } },
  AuthorUpdate: { name: { __type: "String" }, booksIds: { __type: "[ID!]" } },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  books: Array<Book>;
  book: (args: { id: Scalars["ID"] }) => Book;
  author: (args: { id: Scalars["ID"] }) => Author;
  authors: Array<Author>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  createAuthor: (args: { authorCreateInput: AuthorCreate }) => Author;
  updateAuthor: (args: {
    id: Scalars["ID"];
    authorUpdateInput: AuthorUpdate;
  }) => Author;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface Book {
  __typename: "Book" | undefined;
  id: ScalarsEnums["ID"];
  title: ScalarsEnums["String"];
  numberOfPages: ScalarsEnums["Int"];
  coverType?: Maybe<ScalarsEnums["String"]>;
  releaseYear?: Maybe<ScalarsEnums["Int"]>;
  itemsSold?: Maybe<ScalarsEnums["Int"]>;
  size: ScalarsEnums["String"];
}

export interface Author {
  __typename: "Author" | undefined;
  id: ScalarsEnums["ID"];
  books?: Maybe<Array<Book>>;
  name: ScalarsEnums["String"];
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Book: Book;
  Author: Author;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "Book"
  | "Author";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
