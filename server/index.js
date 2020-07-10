"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support");
var typegoose_1 = require("@typegoose/typegoose");
typegoose_1.setLogLevel(typegoose_1.LogLevels.DEBUG);
var server_1 = require("./server");
server_1.startServer();
