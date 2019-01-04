"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sanitizers_1 = require("@Sdk/Sanitizers");
var User = /** @class */ (function () {
    function User() {
    }
    User.create = function (id, name) {
        var user = new User();
        user.id = Sanitizers_1.toString(id);
        user.name = Sanitizers_1.toString(name);
        return user;
    };
    return User;
}());
exports.User = User;
