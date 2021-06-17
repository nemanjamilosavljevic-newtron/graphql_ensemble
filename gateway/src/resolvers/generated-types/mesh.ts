import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export type Query = {
  authors: Array<ExistingAuthor>;
  author: ExistingAuthor;
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
};

export type AuthorModel = {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: AuthorType;
  created_at?: Maybe<Scalars['DateTime']>;
};

export type ExistingAuthor = AuthorModel & {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: AuthorType;
  created_at?: Maybe<Scalars['DateTime']>;
  registration_number?: Maybe<Scalars['String']>;
};

export type ExistingAuthorResult = ExistingAuthor | AuthorDoesNotExistError;

export type AuthorDoesNotExistError = {
  message: Scalars['String'];
};

export type User = {
  id: Scalars['ID'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

export type AuthorType = {
  id: Scalars['ID'];
  name: Scalars['String'];
  version?: Maybe<Scalars['String']>;
};


export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  AuthorModel: ResolversTypes['ExistingAuthor'];
  String: ResolverTypeWrapper<Scalars['String']>;
  ExistingAuthor: ResolverTypeWrapper<ExistingAuthor>;
  ExistingAuthorResult: ResolversTypes['ExistingAuthor'] | ResolversTypes['AuthorDoesNotExistError'];
  AuthorDoesNotExistError: ResolverTypeWrapper<AuthorDoesNotExistError>;
  User: ResolverTypeWrapper<User>;
  AuthorType: ResolverTypeWrapper<AuthorType>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  ID: Scalars['ID'];
  AuthorModel: ResolversParentTypes['ExistingAuthor'];
  String: Scalars['String'];
  ExistingAuthor: ExistingAuthor;
  ExistingAuthorResult: ResolversParentTypes['ExistingAuthor'] | ResolversParentTypes['AuthorDoesNotExistError'];
  AuthorDoesNotExistError: AuthorDoesNotExistError;
  User: User;
  AuthorType: AuthorType;
  DateTime: Scalars['DateTime'];
  Boolean: Scalars['Boolean'];
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  authors?: Resolver<Array<ResolversTypes['ExistingAuthor']>, ParentType, ContextType>;
  author?: Resolver<ResolversTypes['ExistingAuthor'], ParentType, ContextType, RequireFields<QueryAuthorArgs, 'id'>>;
}>;

export type AuthorModelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorModel'] = ResolversParentTypes['AuthorModel']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ExistingAuthor', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AuthorType'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
}>;

export type ExistingAuthorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExistingAuthor'] = ResolversParentTypes['ExistingAuthor']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AuthorType'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  registration_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExistingAuthorResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExistingAuthorResult'] = ResolversParentTypes['ExistingAuthorResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ExistingAuthor' | 'AuthorDoesNotExistError', ParentType, ContextType>;
}>;

export type AuthorDoesNotExistErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorDoesNotExistError'] = ResolversParentTypes['AuthorDoesNotExistError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorType'] = ResolversParentTypes['AuthorType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  AuthorModel?: AuthorModelResolvers<ContextType>;
  ExistingAuthor?: ExistingAuthorResolvers<ContextType>;
  ExistingAuthorResult?: ExistingAuthorResultResolvers<ContextType>;
  AuthorDoesNotExistError?: AuthorDoesNotExistErrorResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  AuthorType?: AuthorTypeResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MeshContext> = Resolvers<ContextType>;

import { MeshContext as BaseMeshContext, ProjectionOptions } from '@graphql-mesh/runtime';

export type AuthorsSdk = {
  authors: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['authors']>,
  author: (args: QueryAuthorArgs, projectionOptions?: ProjectionOptions) => Promise<Query['author']>
};

export type QueryAuthorsSdk = {
  authors: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['authors']>,
  author: (args: QueryAuthorArgs, projectionOptions?: ProjectionOptions) => Promise<Query['author']>
};

export type MutationAuthorsSdk = {

};

export type SubscriptionAuthorsSdk = {

};

export type AuthorsContext = { 
      ["Authors"]: { api: AuthorsSdk, apiQuery: QueryAuthorsSdk, apiMutation: MutationAuthorsSdk, apiSubscription: SubscriptionAuthorsSdk }, 
    };

export type MeshContext = AuthorsContext & BaseMeshContext;