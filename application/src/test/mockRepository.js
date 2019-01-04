"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../BundleContext/Users/Domain/User");
exports.gUserRepositoryMock = jest.fn(function () { return ({
    persist: function (user) {
        return true;
    },
    findById: function (id) {
        return User_1.User.create("123", "jose");
    },
}); });
exports.gUserRepositoryMockError = jest.fn(function () { return ({
    persist: function (user) {
        return false;
    },
    findById: function (id) {
        return null;
    },
}); });
