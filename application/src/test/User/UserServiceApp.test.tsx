import { User, UserRepository } from "../../BundleContext/Users/Domain/User";
import { UserServiceApp } from "../../BundleContext/Users/Application/Service/UserServiceApp";




test('validando servicio agregar', async () => {

    const Mock = jest.fn<UserRepository>(() => ({
        persist(user: User) {
            console.log('saludossssssss');
            return true;
        },
        findById(id: string) {
            return User.create('123', 'jose');
        }
    }));
    const mock = new Mock();

    let userService = new UserServiceApp(mock)
    let rpta = userService.create('123', 'jose');
    expect(true).toEqual(rpta);
});
