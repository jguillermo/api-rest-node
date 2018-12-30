import {User, UserRepository} from "../../BundleContext/Users/Domain/User";
import {UserServiceApp} from "../../BundleContext/Users/Application/Service/UserServiceApp";

import {userRepositoryMockError, userRepositoryMock} from "../mockRepository";

describe('user: servicio de application ok', () => {

    test('agregar nuevo usuario', () => {
        const userRepository = new userRepositoryMock();
        let userService = new UserServiceApp(userRepository);
        let rpta = userService.create('123', 'jose');
        expect(true).toEqual(rpta);
    });

    test('agregar nuevo usuario', () => {
        const userRepository = new userRepositoryMock();
        let userService = new UserServiceApp(userRepository);

        let user = userService.findById('123');
        expect('123').toEqual(user.id);
    });

});

describe('user: servicio de application error', () => {
    test('agregar nuevo usuario', () => {
        const userRepository = new userRepositoryMockError();
        let userService = new UserServiceApp(userRepository);
        expect(() => {
            userService.findById('123');
        }).toThrowError('no se encontro el id 123');
    });
});

