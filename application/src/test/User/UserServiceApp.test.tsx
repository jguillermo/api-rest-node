import {UserServiceApp} from "../../BundleContext/Users/Application/Service/UserServiceApp";
import {User, UserRepository} from "../../BundleContext/Users/Domain/User";

import {userRepositoryMock, userRepositoryMockError} from "../mockRepository";

describe("user: servicio de application ok", () => {

    test("agregar nuevo usuario", () => {
        const userRepository = new userRepositoryMock();
        const userService = new UserServiceApp(userRepository);
        const rpta = userService.create("123", "jose");
        expect(true).toEqual(rpta);
    });

    test("agregar nuevo usuario", () => {
        const userRepository = new userRepositoryMock();
        const userService = new UserServiceApp(userRepository);

        const user = userService.findById("123");
        expect("123").toEqual(user.id);
    });

});

describe("user: servicio de application error", () => {
    test("agregar nuevo usuario", () => {
        const userRepository = new userRepositoryMockError();
        const userService = new UserServiceApp(userRepository);
        expect(() => {
            userService.findById("123");
        }).toThrowError("no se encontro el id 123");
    });
});
