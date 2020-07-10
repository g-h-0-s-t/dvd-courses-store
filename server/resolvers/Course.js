"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Course_1 = __importDefault(require("../models/Course"));
var graphql_compose_mongoose_1 = require("graphql-compose-mongoose");
var graphql_compose_1 = require("graphql-compose");
var CourseTC = graphql_compose_mongoose_1.composeWithMongoose(Course_1.default);
var courseQuery = {
    courseById: CourseTC.getResolver("findById"),
    courseByIds: CourseTC.getResolver("findByIds"),
    courseOne: CourseTC.getResolver("findOne").makeArgNonNull("name"),
    courseMany: CourseTC.getResolver("findMany").makeArgNonNull("findMany"),
    courseCount: CourseTC.getResolver("count"),
    courseConnection: CourseTC.getResolver("connection"),
    coursePagination: CourseTC.getResolver("pagination"),
};
var courseMutation = {
    courseCreateOne: CourseTC.getResolver("createOne"),
    courseCreateMany: CourseTC.getResolver("createMany"),
    courseUpdateById: CourseTC.getResolver("updateById"),
    courseUpdateOne: CourseTC.getResolver("updateOne"),
    courseUpdateMany: CourseTC.getResolver("updateMany"),
    courseRemoveById: CourseTC.getResolver("removeById"),
    courseRemoveOne: CourseTC.getResolver("removeOne"),
    courseRemoveMany: CourseTC.getResolver("removeMany"),
};
var CrudSchemaComposer = new graphql_compose_1.SchemaComposer();
CrudSchemaComposer.Query.addFields(__assign({}, courseQuery));
CrudSchemaComposer.Mutation.addFields(__assign({}, courseMutation));
exports.default = CrudSchemaComposer.buildSchema();
