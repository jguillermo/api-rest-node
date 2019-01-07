"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("@app/Users/Domain/User");
const Exception_1 = require("@sdk/Exception");
class UserServiceApp {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(id, name) {
        let user = User_1.User.create(id, name);
        this.userRepository.persist(user);
        return true;
    }
    findById(id) {
        let user = this.userRepository.findById(id);
        if (user == null) {
            throw new Exception_1.BadRequest(`no se encontro el id ${id}`);
        }
        return {
            id: user.id,
            name: user.name,
        };
    }
}
exports.UserServiceApp = UserServiceApp;
