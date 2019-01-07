"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserServiceApp_1 = require("@app/Users/Application/Service/UserServiceApp");
const UserRepository_1 = require("@app/Users/Infrastructure/Repository/HardData/UserRepository");
function userRepository() {
    return new UserRepository_1.UserHDRepository();
}
function userServiceApp() {
    return new UserServiceApp_1.UserServiceApp(userRepository());
}
exports.USER = {
    userServiceApp,
};
