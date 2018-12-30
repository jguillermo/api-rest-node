import {UserServiceApp} from "../../BundleContext/Users/Application/Service/UserServiceApp";
import {IuserRepository, User} from "../../BundleContext/Users/Domain/User";

import {userRepositoryMock, userRepositoryMockError} from "../mockRepository";

describe("user: servicio de application ok", () => {

    test("agregar nuevo usuario", () => {
        let userRepository = new userRepositoryMock();
        let userService = new UserServiceApp(userRepository);
        let rpta = userService.create("123", "jose");
        expect(true).toEqual(rpta);
    });

    test("agregar nuevo usuario", () => {
        let userRepository = new userRepositoryMock();
        let userService = new UserServiceApp(userRepository);
        let user = userService.findById("123");
        expect("123").toEqual(user.id);
    });

});

describe("user: servicio de application error", () => {
    test("agregar nuevo usuario", () => {
        let userRepository = new userRepositoryMockError();
        let userService = new UserServiceApp(userRepository);
        expect(() => {
            userService.findById("123");
        }).toThrowError("no se encontro el id 123");
    });
});
