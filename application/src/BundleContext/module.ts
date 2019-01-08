import { UserServiceApp } from "@app/Users/Application/Service/UserServiceApp";
import { UserHDRepository } from "@app/Users/Infrastructure/Repository/HardData/UserRepository";
import { LoggerWinston } from "@sdk/Logger";

function userRepository() {
    return new UserHDRepository();
}

function logger() {
    return LoggerWinston.getInstance();
}

function userServiceApp() {
    return new UserServiceApp(userRepository(), logger());
}

export const USER = {
    userServiceApp,
 };
