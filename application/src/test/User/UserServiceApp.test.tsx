import { BadRequest } from "@sdk/Exception";
import "jest";
import {UserServiceApp} from "../../BundleContext/Users/Application/Service/UserServiceApp";
import {gUserRepositoryMock, gUserRepositoryMockError} from "../mockRepository";

describe("user: servicio de application ok", () => {

    test("agregar nuevo usuario", () => {
        let userRepository = new gUserRepositoryMock();
        let userService = new UserServiceApp(userRepository);
        let rpta = userService.create("237b60db-83e6-4502-b1e2-98a15340f065", "jose");
        expect(true).toEqual(rpta);
    });

    test("buscar un usuario", () => {
        let userRepository = new gUserRepositoryMock();
        let userService = new UserServiceApp(userRepository);
        let user = userService.findById("237b60db-83e6-4502-b1e2-98a15340f065");
        expect("237b60db-83e6-4502-b1e2-98a15340f065").toEqual(user.id);
    });

});

describe("user: servicio de application error", () => {
    test("agregar nuevo usuario", () => {
        let userRepository = new gUserRepositoryMockError();
        let userService = new UserServiceApp(userRepository);
        expect(() => {
            userService.findById("237b60db-83e6-4502-b1e2-98a15340f065");
        }).toThrowError("no se encontro el id 237b60db-83e6-4502-b1e2-98a15340f065");
        expect(() => {
            userService.findById("237b60db-83e6-4502-b1e2-98a15340f065");
        }).toThrowError(BadRequest);

    });
});
