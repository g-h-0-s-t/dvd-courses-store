import gql from "graphql-tag";
import * as React from "react";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactComponents from "@apollo/react-components";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
};

export type Query = {
  __typename?: "Query";
  courseById?: Maybe<Course>;
  courseByIds?: Maybe<Array<Maybe<Course>>>;
  courseOne?: Maybe<Course>;
  courseMany?: Maybe<Array<Maybe<Course>>>;
  courseCount?: Maybe<Scalars["Int"]>;
  courseConnection?: Maybe<CourseConnection>;
  coursePagination?: Maybe<CoursePagination>;
};

export type QueryCourseByIdArgs = {
  _id: Scalars["MongoID"];
};

export type QueryCourseByIdsArgs = {
  _ids: Array<Maybe<Scalars["MongoID"]>>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindByIdsCourseInput>;
};

export type QueryCourseOneArgs = {
  filter?: Maybe<FilterFindOneCourseInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneCourseInput>;
};

export type QueryCourseManyArgs = {
  filter?: Maybe<FilterFindManyCourseInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyCourseInput>;
};

export type QueryCourseCountArgs = {
  filter?: Maybe<FilterCourseInput>;
};

export type QueryCourseConnectionArgs = {
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["String"]>;
  filter?: Maybe<FilterFindManyCourseInput>;
  sort?: Maybe<SortConnectionCourseEnum>;
};

export type QueryCoursePaginationArgs = {
  page?: Maybe<Scalars["Int"]>;
  perPage?: Maybe<Scalars["Int"]>;
  filter?: Maybe<FilterFindManyCourseInput>;
  sort?: Maybe<SortFindManyCourseInput>;
};

export type Course = {
  __typename?: "Course";
  name?: Maybe<Scalars["String"]>;
  card?: Maybe<CourseCard>;
  image?: Maybe<CourseImage>;
  _id: Scalars["MongoID"];
};

export type CourseCard = {
  __typename?: "CourseCard";
  header?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  furtherInformation?: Maybe<CourseCardFurtherInformation>;
  tag?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
};

export type CourseCardFurtherInformation = {
  __typename?: "CourseCardFurtherInformation";
  icon?: Maybe<Scalars["JSON"]>;
  text?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
};

export type CourseImage = {
  __typename?: "CourseImage";
  alt?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
};

export enum SortFindByIdsCourseInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
}

export type FilterFindOneCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card?: Maybe<CourseCardInput>;
  image?: Maybe<CourseImageInput>;
  _id?: Maybe<Scalars["MongoID"]>;
  _ids?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneCourseInput>;
  OR?: Maybe<Array<FilterFindOneCourseInput>>;
  AND?: Maybe<Array<FilterFindOneCourseInput>>;
};

export type CourseCardInput = {
  header?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  furtherInformation?: Maybe<CourseCardFurtherInformationInput>;
  tag?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
};

export type CourseCardFurtherInformationInput = {
  icon?: Maybe<Scalars["JSON"]>;
  text?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
};

export type CourseImageInput = {
  alt?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneCourseInput = {
  name?: Maybe<NameOperatorsFilterFindOneCourseInput>;
  _id?: Maybe<_IdOperatorsFilterFindOneCourseInput>;
};

export type NameOperatorsFilterFindOneCourseInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type _IdOperatorsFilterFindOneCourseInput = {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
};

export enum SortFindOneCourseInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
}

export type FilterFindManyCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card?: Maybe<CourseCardInput>;
  image?: Maybe<CourseImageInput>;
  _id?: Maybe<Scalars["MongoID"]>;
  _ids?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyCourseInput>;
  OR?: Maybe<Array<FilterFindManyCourseInput>>;
  AND?: Maybe<Array<FilterFindManyCourseInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyCourseInput = {
  name?: Maybe<NameOperatorsFilterFindManyCourseInput>;
  _id?: Maybe<_IdOperatorsFilterFindManyCourseInput>;
};

export type NameOperatorsFilterFindManyCourseInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type _IdOperatorsFilterFindManyCourseInput = {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
};

export enum SortFindManyCourseInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
}

export type FilterCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card?: Maybe<CourseCardInput>;
  image?: Maybe<CourseImageInput>;
  _id?: Maybe<Scalars["MongoID"]>;
  _ids?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterCourseInput>;
  OR?: Maybe<Array<FilterCourseInput>>;
  AND?: Maybe<Array<FilterCourseInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterCourseInput = {
  name?: Maybe<NameOperatorsFilterCourseInput>;
  _id?: Maybe<_IdOperatorsFilterCourseInput>;
};

export type NameOperatorsFilterCourseInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type _IdOperatorsFilterCourseInput = {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
};

/** A connection to a list of items. */
export type CourseConnection = {
  __typename?: "CourseConnection";
  /** Total object count. */
  count: Scalars["Int"];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<CourseEdge>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
};

/** An edge in a connection. */
export type CourseEdge = {
  __typename?: "CourseEdge";
  /** The item at the end of the edge */
  node: Course;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
};

export enum SortConnectionCourseEnum {
  IdDesc = "_ID_DESC",
  IdAsc = "_ID_ASC",
  NameDesc = "NAME_DESC",
  NameAsc = "NAME_ASC",
}

/** List of items with pagination. */
export type CoursePagination = {
  __typename?: "CoursePagination";
  /** Total object count. */
  count?: Maybe<Scalars["Int"]>;
  /** Array of objects. */
  items?: Maybe<Array<Maybe<Course>>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PaginationInfo = {
  __typename?: "PaginationInfo";
  currentPage: Scalars["Int"];
  perPage: Scalars["Int"];
  pageCount?: Maybe<Scalars["Int"]>;
  itemCount?: Maybe<Scalars["Int"]>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPreviousPage?: Maybe<Scalars["Boolean"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Create one document with mongoose defaults, setters, hooks and validation */
  courseCreateOne?: Maybe<CreateOneCoursePayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  courseCreateMany?: Maybe<CreateManyCoursePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  courseUpdateById?: Maybe<UpdateByIdCoursePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  courseUpdateOne?: Maybe<UpdateOneCoursePayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  courseUpdateMany?: Maybe<UpdateManyCoursePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  courseRemoveById?: Maybe<RemoveByIdCoursePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  courseRemoveOne?: Maybe<RemoveOneCoursePayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  courseRemoveMany?: Maybe<RemoveManyCoursePayload>;
};

export type MutationCourseCreateOneArgs = {
  record: CreateOneCourseInput;
};

export type MutationCourseCreateManyArgs = {
  records: Array<CreateManyCourseInput>;
};

export type MutationCourseUpdateByIdArgs = {
  record: UpdateByIdCourseInput;
};

export type MutationCourseUpdateOneArgs = {
  record: UpdateOneCourseInput;
  filter?: Maybe<FilterUpdateOneCourseInput>;
  sort?: Maybe<SortUpdateOneCourseInput>;
  skip?: Maybe<Scalars["Int"]>;
};

export type MutationCourseUpdateManyArgs = {
  record: UpdateManyCourseInput;
  filter?: Maybe<FilterUpdateManyCourseInput>;
  sort?: Maybe<SortUpdateManyCourseInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type MutationCourseRemoveByIdArgs = {
  _id: Scalars["MongoID"];
};

export type MutationCourseRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneCourseInput>;
  sort?: Maybe<SortRemoveOneCourseInput>;
};

export type MutationCourseRemoveManyArgs = {
  filter: FilterRemoveManyCourseInput;
};

export type CreateOneCoursePayload = {
  __typename?: "CreateOneCoursePayload";
  /** Created document ID */
  recordId?: Maybe<Scalars["MongoID"]>;
  /** Created document */
  record?: Maybe<Course>;
};

export type CreateOneCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card: CourseCardInput;
  image: CourseImageInput;
};

export type CreateManyCoursePayload = {
  __typename?: "CreateManyCoursePayload";
  /** Created document ID */
  recordIds: Array<Maybe<Scalars["MongoID"]>>;
  /** Created documents */
  records: Array<Maybe<Course>>;
  /** Count of all documents created */
  createCount: Scalars["Int"];
};

export type CreateManyCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card: CourseCardInput;
  image: CourseImageInput;
};

export type UpdateByIdCoursePayload = {
  __typename?: "UpdateByIdCoursePayload";
  /** Updated document ID */
  recordId?: Maybe<Scalars["MongoID"]>;
  /** Updated document */
  record?: Maybe<Course>;
};

export type UpdateByIdCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card?: Maybe<CourseCardInput>;
  image?: Maybe<CourseImageInput>;
  _id: Scalars["MongoID"];
};

export type UpdateOneCoursePayload = {
  __typename?: "UpdateOneCoursePayload";
  /** Updated document ID */
  recordId?: Maybe<Scalars["MongoID"]>;
  /** Updated document */
  record?: Maybe<Course>;
};

export type UpdateOneCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card?: Maybe<CourseCardInput>;
  image?: Maybe<CourseImageInput>;
};

export type FilterUpdateOneCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card?: Maybe<CourseCardInput>;
  image?: Maybe<CourseImageInput>;
  _id?: Maybe<Scalars["MongoID"]>;
  _ids?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUpdateOneCourseInput>;
  OR?: Maybe<Array<FilterUpdateOneCourseInput>>;
  AND?: Maybe<Array<FilterUpdateOneCourseInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUpdateOneCourseInput = {
  name?: Maybe<NameOperatorsFilterUpdateOneCourseInput>;
  _id?: Maybe<_IdOperatorsFilterUpdateOneCourseInput>;
};

export type NameOperatorsFilterUpdateOneCourseInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type _IdOperatorsFilterUpdateOneCourseInput = {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
};

export enum SortUpdateOneCourseInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
}

export type UpdateManyCoursePayload = {
  __typename?: "UpdateManyCoursePayload";
  /** Affected documents number */
  numAffected?: Maybe<Scalars["Int"]>;
};

export type UpdateManyCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card?: Maybe<CourseCardInput>;
  image?: Maybe<CourseImageInput>;
};

export type FilterUpdateManyCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card?: Maybe<CourseCardInput>;
  image?: Maybe<CourseImageInput>;
  _id?: Maybe<Scalars["MongoID"]>;
  _ids?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUpdateManyCourseInput>;
  OR?: Maybe<Array<FilterUpdateManyCourseInput>>;
  AND?: Maybe<Array<FilterUpdateManyCourseInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUpdateManyCourseInput = {
  name?: Maybe<NameOperatorsFilterUpdateManyCourseInput>;
  _id?: Maybe<_IdOperatorsFilterUpdateManyCourseInput>;
};

export type NameOperatorsFilterUpdateManyCourseInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type _IdOperatorsFilterUpdateManyCourseInput = {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
};

export enum SortUpdateManyCourseInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
}

export type RemoveByIdCoursePayload = {
  __typename?: "RemoveByIdCoursePayload";
  /** Removed document ID */
  recordId?: Maybe<Scalars["MongoID"]>;
  /** Removed document */
  record?: Maybe<Course>;
};

export type RemoveOneCoursePayload = {
  __typename?: "RemoveOneCoursePayload";
  /** Removed document ID */
  recordId?: Maybe<Scalars["MongoID"]>;
  /** Removed document */
  record?: Maybe<Course>;
};

export type FilterRemoveOneCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card?: Maybe<CourseCardInput>;
  image?: Maybe<CourseImageInput>;
  _id?: Maybe<Scalars["MongoID"]>;
  _ids?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterRemoveOneCourseInput>;
  OR?: Maybe<Array<FilterRemoveOneCourseInput>>;
  AND?: Maybe<Array<FilterRemoveOneCourseInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterRemoveOneCourseInput = {
  name?: Maybe<NameOperatorsFilterRemoveOneCourseInput>;
  _id?: Maybe<_IdOperatorsFilterRemoveOneCourseInput>;
};

export type NameOperatorsFilterRemoveOneCourseInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type _IdOperatorsFilterRemoveOneCourseInput = {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
};

export enum SortRemoveOneCourseInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
}

export type RemoveManyCoursePayload = {
  __typename?: "RemoveManyCoursePayload";
  /** Affected documents number */
  numAffected?: Maybe<Scalars["Int"]>;
};

export type FilterRemoveManyCourseInput = {
  name?: Maybe<Scalars["String"]>;
  card?: Maybe<CourseCardInput>;
  image?: Maybe<CourseImageInput>;
  _id?: Maybe<Scalars["MongoID"]>;
  _ids?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterRemoveManyCourseInput>;
  OR?: Maybe<Array<FilterRemoveManyCourseInput>>;
  AND?: Maybe<Array<FilterRemoveManyCourseInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterRemoveManyCourseInput = {
  name?: Maybe<NameOperatorsFilterRemoveManyCourseInput>;
  _id?: Maybe<_IdOperatorsFilterRemoveManyCourseInput>;
};

export type NameOperatorsFilterRemoveManyCourseInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type _IdOperatorsFilterRemoveManyCourseInput = {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
};

export type CourseDataFragment = { __typename?: "Course" } & Pick<
  Course,
  "name"
> & {
    image?: Maybe<
      { __typename?: "CourseImage" } & Pick<CourseImage, "filename" | "alt">
    >;
    card?: Maybe<
      { __typename?: "CourseCard" } & Pick<
        CourseCard,
        "header" | "description" | "price" | "tag"
      > & {
          furtherInformation?: Maybe<
            { __typename?: "CourseCardFurtherInformation" } & Pick<
              CourseCardFurtherInformation,
              "icon" | "text"
            >
          >;
        }
    >;
  };

export type CourseQueryVariables = Exact<{ [key: string]: never }>;

export type CourseQuery = { __typename?: "Query" } & {
  courseMany?: Maybe<
    Array<Maybe<{ __typename?: "Course" } & CourseDataFragment>>
  >;
};

export const CourseDataFragmentDoc = gql`
  fragment CourseData on Course {
    name
    image {
      filename
      alt
    }
    card {
      header
      description
      price
      tag
      furtherInformation {
        icon
        text
      }
    }
  }
`;
export const CourseDocument = gql`
  query course {
    courseMany {
      ...CourseData
    }
  }
  ${CourseDataFragmentDoc}
`;
export type CourseComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    CourseQuery,
    CourseQueryVariables
  >,
  "query"
>;

export const CourseComponent = (props: CourseComponentProps) => (
  <ApolloReactComponents.Query<CourseQuery, CourseQueryVariables>
    query={CourseDocument}
    {...props}
  />
);

/**
 * __useCourseQuery__
 *
 * To run a query within a React component, call `useCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseQuery({
 *   variables: {
 *   },
 * });
 */
export function useCourseQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CourseQuery,
    CourseQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<CourseQuery, CourseQueryVariables>(
    CourseDocument,
    baseOptions
  );
}
export function useCourseLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CourseQuery,
    CourseQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<CourseQuery, CourseQueryVariables>(
    CourseDocument,
    baseOptions
  );
}
export type CourseQueryHookResult = ReturnType<typeof useCourseQuery>;
export type CourseLazyQueryHookResult = ReturnType<typeof useCourseLazyQuery>;
export type CourseQueryResult = ApolloReactCommon.QueryResult<
  CourseQuery,
  CourseQueryVariables
>;
