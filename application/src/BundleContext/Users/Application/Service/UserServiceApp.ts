import { UserRepository, User } from "../../Domain/User";

export class UserServiceApp {
    constructor(private userRepository: UserRepository) {
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
            throw new Error("no se encontro el id" + id)
        }

        return {
            'id':user.id,
            'name': user.name
        };
    }
}