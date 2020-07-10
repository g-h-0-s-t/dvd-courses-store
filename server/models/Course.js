"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typegoose_1 = require("@typegoose/typegoose");
// Course Schema
var FurtherInformation = /** @class */ (function () {
    function FurtherInformation() {
    }
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", Object)
    ], FurtherInformation.prototype, "icon", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], FurtherInformation.prototype, "text", void 0);
    return FurtherInformation;
}());
var Image = /** @class */ (function () {
    function Image() {
    }
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Image.prototype, "alt", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Image.prototype, "filename", void 0);
    return Image;
}());
var Card = /** @class */ (function () {
    function Card() {
    }
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Card.prototype, "header", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Card.prototype, "description", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", Number)
    ], Card.prototype, "price", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", FurtherInformation)
    ], Card.prototype, "furtherInformation", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Card.prototype, "tag", void 0);
    return Card;
}());
var Course = /** @class */ (function () {
    function Course() {
    }
    __decorate([
        typegoose_1.prop({ unique: true }),
        __metadata("design:type", String)
    ], Course.prototype, "name", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", Card)
    ], Course.prototype, "card", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", Image)
    ], Course.prototype, "image", void 0);
    return Course;
}());
exports.default = typegoose_1.getModelForClass(Course);
