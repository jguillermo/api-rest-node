import {UserServiceApp} from "../../BundleContext/Users/Application/Service/UserServiceApp";
import {IuserRepository, User} from "../../BundleContext/Users/Domain/User";

import {gUserRepositoryMock, gUserRepositoryMockError} from "../mockRepository";

describe("user: servicio de application ok", () => {

    test("agregar nuevo usuario", () => {
        let user_repository = new gUserRepositoryMock();
        let user_service = new UserServiceApp(user_repository);
        let rpta = user_service.create("123", "jose");
        expect(true).toEqual(rpta);
    });

    test("agregar nuevo usuario", () => {
        let user_repository = new gUserRepositoryMock();
        let user_service = new UserServiceApp(user_repository);
        let user = user_service.findById("123");
        expect("123").toEqual(user.id);
    });

});

describe("user: servicio de application error", () => {
    test("agregar nuevo usuario", () => {
        let user_repository = new gUserRepositoryMockError();
        let user_service = new UserServiceApp(user_repository);
        expect(() => {
            user_service.findById("123");
        }).toThrowError("no se encontro el id 123");
    });
});
