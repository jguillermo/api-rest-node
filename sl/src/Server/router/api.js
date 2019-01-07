"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersCollection_1 = require("../controller/UsersCollection");
const express_1 = require("express");
const ROUTER = express_1.Router();
ROUTER.get("/users", UsersCollection_1.userGetCollectionAction);
ROUTER.get("/clean", UsersCollection_1.systemcleanAction);
exports.default = ROUTER;
