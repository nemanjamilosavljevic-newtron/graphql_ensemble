/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash } from 'gqless';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface AuthorCreate {
  name: Scalars['String'];
  booksIds: Array<Scalars['ID']>;
}

export interface AuthorUpdate {
  name?: Maybe<Scalars['String']>;
  booksIds?: Maybe<Array<Scalars['ID']>>;
}

export const scalarsEnumsHash: ScalarsEnumsHash = { ID: true, String: true, Boolean: true };
export const generatedSchema = {
  query: {
    __typename: { __type: 'String!' },
    books: { __type: '[Book!]!' },
    book: { __type: 'Book', __args: { id: 'ID!' } },
    authors: { __type: '[Author!]!' },
    author: { __type: 'Author', __args: { id: 'ID!' } },
  },
  mutation: {
    __typename: { __type: 'String!' },
    createAuthor: { __type: 'Author!', __args: { authorCreateInput: 'AuthorCreate!' } },
    updateAuthor: { __type: 'Author!', __args: { id: 'ID!', authorUpdateInput: 'AuthorUpdate!' } },
  },
  subscription: {},
  Book: {
    __typename: { __type: 'String!' },
    id: { __type: 'ID!' },
    title: { __type: 'String!' },
    authorId: { __type: 'ID!' },
    author: { __type: 'Author' },
  },
  Author: {
    __typename: { __type: 'String!' },
    id: { __type: 'ID!' },
    name: { __type: 'String!' },
    booksIds: { __type: '[ID!]!' },
    books: { __type: '[Book]' },
  },
  AuthorCreate: { name: { __type: 'String!' }, booksIds: { __type: '[ID!]!' } },
  AuthorUpdate: { name: { __type: 'String' }, booksIds: { __type: '[ID!]' } },
} as const;

export interface Query {
  __typename: 'Query' | undefined;
  books: Array<Book>;
  book: (args: { id: Scalars['ID'] }) => Maybe<Book>;
  authors: Array<Author>;
  author: (args: { id: Scalars['ID'] }) => Maybe<Author>;
}

export interface Mutation {
  __typename: 'Mutation' | undefined;
  createAuthor: (args: { authorCreateInput: AuthorCreate }) => Author;
  updateAuthor: (args: { id: Scalars['ID']; authorUpdateInput: AuthorUpdate }) => Author;
}

export interface Subscription {
  __typename: 'Subscription' | undefined;
}

export interface Book {
  __typename: 'Book' | undefined;
  id: ScalarsEnums['ID'];
  title: ScalarsEnums['String'];
  authorId: ScalarsEnums['ID'];
  author?: Maybe<Author>;
}

export interface Author {
  __typename: 'Author' | undefined;
  id: ScalarsEnums['ID'];
  name: ScalarsEnums['String'];
  booksIds: Array<ScalarsEnums['ID']>;
  books?: Maybe<Array<Maybe<Book>>>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Book: Book;
  Author: Author;
}
export type SchemaObjectTypesNames = 'Query' | 'Mutation' | 'Subscription' | 'Book' | 'Author';

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
