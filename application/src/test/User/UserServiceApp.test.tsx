import { User } from "../../BundleContext/Users/Domain/User";

test('validando 1', async() => {
    let user:User=User.create('123','jose');
    expect('123').toEqual(user.id);
    expect('jose').toEqual(user.name);
});
