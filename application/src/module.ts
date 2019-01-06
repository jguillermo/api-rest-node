import { UserServiceApp } from "@app/Users/Application/Service/UserServiceApp";
import { UserHDRepository } from "@app/Users/Infrastructure/Repository/HardData/UserRepository";

function userRepository() {
    return new UserHDRepository();
}

function userServiceApp() {
    return new UserServiceApp(userRepository());
}

export const USER = {
    userServiceApp,
 };
