import {IuserRepository, User} from "../../Domain/User";

export class UserServiceApp {

    private _userRepository: IuserRepository;

    constructor(userRepository: IuserRepository) {
        this._userRepository = userRepository;
    }

    public create(id: string, name: string): boolean {
        let user: User = User.create(id, name);
        this._userRepository.persist(user);
        return true;
    }

    public findById(id: string) {
        let user: User = this._userRepository.findById(id);

        if (user == null) {
            throw new Error(`no se encontro el id ${id}`);
        }

        return {
            id: user.id,
            name: user.name,
        };
    }
}
