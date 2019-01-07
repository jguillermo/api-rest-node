"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sanitizers_1 = require("@sdk/Sanitizers");
const Validator_1 = require("@sdk/Validator");
function validateUser(user) {
    Validator_1.validateId(user.id);
}
exports.validateUser = validateUser;
class User {
    static create(id, name) {
        let user = new User();
        user.id = Sanitizers_1.toString(id);
        user.name = Sanitizers_1.toString(name);
        validateUser(user);
        return user;
    }
}
exports.User = User;
