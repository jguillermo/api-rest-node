import { IuserRepository, User } from "@app/Users/Domain/User";
import { BadRequest } from "@sdk/Exception";

export class UserServiceApp {

    private userRepository: IuserRepository;

    constructor(userRepository: IuserRepository) {
        this.userRepository = userRepository;
    }

    public create(id: string, name: string): boolean {
        let user: User = User.create(id, name);
        this.userRepository.persist(user);
        return true;
    }

    public findById(id: string) {
        let user: User = this.userRepository.findById(id);

        if (user == null) {
            throw new BadRequest(`no se encontro el id ${id}`);
        }

        return {
            id: user.id,
            name: user.name,
        };
    }
}
