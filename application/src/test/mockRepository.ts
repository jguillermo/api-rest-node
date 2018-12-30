import {User, UserRepository} from "../BundleContext/Users/Domain/User";


export const userRepositoryMock = jest.fn<UserRepository>(() => ({
    persist(user: User) {
        return true;
    },
    findById(id: string) {
        return User.create('123', 'jose');
    }
}));

export const userRepositoryMockError = jest.fn<UserRepository>(() => ({
    persist(user: User) {
        return false;
    },
    findById(id: string) {
        return null;
    }
}));