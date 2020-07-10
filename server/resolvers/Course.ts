import CourseModel from "../models/Course";
import { composeWithMongoose } from "graphql-compose-mongoose";
import { SchemaComposer } from "graphql-compose";

const CourseTC = composeWithMongoose(CourseModel);

const courseQuery = {
  courseById: CourseTC.getResolver("findById"),
  courseByIds: CourseTC.getResolver("findByIds"),
  courseOne: CourseTC.getResolver("findOne"),
  courseMany: CourseTC.getResolver("findMany"),
  courseCount: CourseTC.getResolver("count"),
  courseConnection: CourseTC.getResolver("connection"),
  coursePagination: CourseTC.getResolver("pagination"),
};

const courseMutation = {
  courseCreateOne: CourseTC.getResolver("createOne"),
  courseCreateMany: CourseTC.getResolver("createMany"),
  courseUpdateById: CourseTC.getResolver("updateById"),
  courseUpdateOne: CourseTC.getResolver("updateOne"),
  courseUpdateMany: CourseTC.getResolver("updateMany"),
  courseRemoveById: CourseTC.getResolver("removeById"),
  courseRemoveOne: CourseTC.getResolver("removeOne"),
  courseRemoveMany: CourseTC.getResolver("removeMany"),
};

const CrudSchemaComposer = new SchemaComposer();
CrudSchemaComposer.Query.addFields({ ...courseQuery });
CrudSchemaComposer.Mutation.addFields({ ...courseMutation });
export default CrudSchemaComposer.buildSchema();
