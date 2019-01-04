import {IuserRepository, User} from "../BundleContext/Users/Domain/User";

export let gUserRepositoryMock = jest.fn<IuserRepository>(() => ({
    persist(user: User) {
        return true;
    },
    findById(id: string) {
        return User.create("237b60db-83e6-4502-b1e2-98a15340f065", "jose");
    },
}));

export let gUserRepositoryMockError = jest.fn<IuserRepository>(() => ({
    persist(user: User) {
        return false;
    },
    findById(id: string) {
        return null;
    },
}));
