import { IuserRepository, User } from "@app/Users/Domain/User";
import { ILogguer } from "@sdk/Logger";

export class UserHDRepository implements IuserRepository {

    private logger: ILogguer;

    constructor(logger: ILogguer) {
        this.logger = logger;
        this.logger.repositoryCreated("UserHDRepository");
    }

    public persist(user: User): boolean {
        return true;
    }

    public findById(id: string): User {
        return User.create(id, "jose");
    }
}
