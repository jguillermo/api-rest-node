import {User, UserRepository} from "../../BundleContext/Users/Domain/User";
import {UserServiceApp} from "../../BundleContext/Users/Application/Service/UserServiceApp";

const userRepositoryMock = jest.fn<UserRepository>(() => ({
    persist(user: User) {
        return true;
    },
    findById(id: string) {
        return User.create('123', 'jose');
    }
}));

const userRepositoryMockError = jest.fn<UserRepository>(() => ({
    persist(user: User) {
        return false;
    },
    findById(id: string) {
        return null;
    }
}));

describe('user: servicio de application ok', () => {

    test('agregar nuevo usuario', async () => {
        const userRepository = new userRepositoryMock();
        let userService = new UserServiceApp(userRepository);
        let rpta = userService.create('123', 'jose');
        expect(true).toEqual(rpta);
    });

    test('agregar nuevo usuario', async () => {
        const userRepository = new userRepositoryMock();
        let userService = new UserServiceApp(userRepository);

        let user = userService.findById('123');
        expect('123').toEqual(user.id);
    });

});

describe('user: servicio de application error', () => {
    test('agregar nuevo usuario', async () => {
        const userRepository = new userRepositoryMockError();
        let userService = new UserServiceApp(userRepository);
        expect(() => {
            userService.findById('123');
        }).toThrowError('no se encontro el id 123');
    });
});

