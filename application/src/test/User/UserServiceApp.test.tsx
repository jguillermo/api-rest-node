import { BadRequest } from "@sdk/Exception";
import "jest";
import {UserServiceApp} from "../../BundleContext/Users/Application/Service/UserServiceApp";
import {gUserRepositoryMock, gUserRepositoryMockError} from "../mockRepository";

describe("user: servicio de application ok", () => {

    test("agregar nuevo usuario", () => {
        let user_repository = new gUserRepositoryMock();
        let user_service = new UserServiceApp(user_repository);
        let rpta = user_service.create("237b60db-83e6-4502-b1e2-98a15340f065", "jose");
        expect(true).toEqual(rpta);
    });

    test("buscar un usuario", () => {
        let user_repository = new gUserRepositoryMock();
        let user_service = new UserServiceApp(user_repository);
        let user = user_service.findById("237b60db-83e6-4502-b1e2-98a15340f065");
        expect("237b60db-83e6-4502-b1e2-98a15340f065").toEqual(user.id);
    });

});

describe("user: servicio de application error", () => {
    test("agregar nuevo usuario", () => {
        let user_repository = new gUserRepositoryMockError();
        let user_service = new UserServiceApp(user_repository);
        expect(() => {
            user_service.findById("237b60db-83e6-4502-b1e2-98a15340f065");
        }).toThrowError("no se encontro el id 237b60db-83e6-4502-b1e2-98a15340f065");
        expect(() => {
            user_service.findById("237b60db-83e6-4502-b1e2-98a15340f065");
        }).toThrowError(BadRequest);

    });
});
