"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("@app/Users/Domain/User");
class UserHDRepository {
    persist(user) {
        return true;
    }
    findById(id) {
        return User_1.User.create(id, "jose");
    }
}
exports.UserHDRepository = UserHDRepository;
