import { IuserRepository, User } from "@app/Users/Domain/User";
import { BadRequest } from "@sdk/Exception";
import { ILogguer } from "@sdk/Logger";

export class UserServiceApp {

    private userRepository: IuserRepository;
    private logger: ILogguer;

    constructor(userRepository: IuserRepository, logger: ILogguer) {
        this.userRepository = userRepository;
        this.logger = logger;
        this.logger.serviceCreated("UserServiceApp");
    }

    public create(id: string, name: string): boolean {
        this.logger.serviceMethod("create", "UserServiceApp");
        let user: User = User.create(id, name);
        this.userRepository.persist(user);
        return true;
    }

    public findById(id: string) {
        this.logger.serviceMethod("findById", "UserServiceApp");
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
