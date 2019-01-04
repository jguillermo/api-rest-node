"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserServiceApp_1 = require("../../BundleContext/Users/Application/Service/UserServiceApp");
var mockRepository_1 = require("../mockRepository");
describe("user: servicio de application ok", function () {
    test("agregar nuevo usuario", function () {
        var user_repository = new mockRepository_1.gUserRepositoryMock();
        var user_service = new UserServiceApp_1.UserServiceApp(user_repository);
        var rpta = user_service.create("123", "jose");
        expect(true).toEqual(rpta);
    });
    test("agregar nuevo usuario", function () {
        var user_repository = new mockRepository_1.gUserRepositoryMock();
        var user_service = new UserServiceApp_1.UserServiceApp(user_repository);
        var user = user_service.findById("123");
        expect("123").toEqual(user.id);
    });
});
describe("user: servicio de application error", function () {
    test("agregar nuevo usuario", function () {
        var user_repository = new mockRepository_1.gUserRepositoryMockError();
        var user_service = new UserServiceApp_1.UserServiceApp(user_repository);
        expect(function () {
            user_service.findById("123");
        }).toThrowError("no se encontro el id 123");
    });
});
