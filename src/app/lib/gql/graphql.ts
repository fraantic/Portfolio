/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateTimer: Timer;
  UpdateTimer: Timer;
};


export type MutationCreateTimerArgs = {
  timeSince: Scalars['Int']['input'];
};


export type MutationUpdateTimerArgs = {
  timeSince: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  timer: Array<Timer>;
};

export type Timer = {
  __typename?: 'Timer';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  timeSince: Scalars['Int']['output'];
};

export type CreateTimerMutationVariables = Exact<{
  timeSince: Scalars['Int']['input'];
}>;


export type CreateTimerMutation = { __typename?: 'Mutation', CreateTimer: { __typename?: 'Timer', createdAt: string, id: string, timeSince: number } };

export type UpdateTimerMutationVariables = Exact<{
  timeSince: Scalars['Int']['input'];
}>;


export type UpdateTimerMutation = { __typename?: 'Mutation', UpdateTimer: { __typename?: 'Timer', id: string, createdAt: string, timeSince: number } };

export type TimerQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TimerQueryQuery = { __typename?: 'Query', timer: Array<{ __typename?: 'Timer', id: string, createdAt: string, timeSince: number }> };


export const CreateTimerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTimer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeSince"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateTimer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"timeSince"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeSince"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timeSince"}}]}}]}}]} as unknown as DocumentNode<CreateTimerMutation, CreateTimerMutationVariables>;
export const UpdateTimerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTimer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeSince"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateTimer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"timeSince"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeSince"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"timeSince"}}]}}]}}]} as unknown as DocumentNode<UpdateTimerMutation, UpdateTimerMutationVariables>;
export const TimerQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TimerQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"timeSince"}}]}}]}}]} as unknown as DocumentNode<TimerQueryQuery, TimerQueryQueryVariables>;