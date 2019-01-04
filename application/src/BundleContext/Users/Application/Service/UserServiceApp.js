"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../../Domain/User");
var UserServiceApp = /** @class */ (function () {
    function UserServiceApp(userRepository) {
        this._userRepository = userRepository;
    }
    UserServiceApp.prototype.create = function (id, name) {
        var user = User_1.User.create(id, name);
        this._userRepository.persist(user);
        return true;
    };
    UserServiceApp.prototype.findById = function (id) {
        var user = this._userRepository.findById(id);
        if (user == null) {
            throw new Error("no se encontro el id " + id);
        }
        return {
            id: user.id,
            name: user.name,
        };
    };
    return UserServiceApp;
}());
exports.UserServiceApp = UserServiceApp;
