import { UserServiceApp } from "@app/Users/Application/Service/UserServiceApp";
import { UserHDRepository } from "@app/Users/Infrastructure/Repository/HardData/UserRepository";
import { ILogguer, LoggerWinston } from "@sdk/Logger";

function userRepository() {
    return new UserHDRepository(logger());
}

export function logger(): ILogguer {
    return LoggerWinston.getInstance();
}

function userServiceApp() {
    return new UserServiceApp(userRepository(), logger());
}

export const USER = {
    userServiceApp,
 };
