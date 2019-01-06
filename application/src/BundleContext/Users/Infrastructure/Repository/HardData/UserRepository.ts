import { IuserRepository, User } from "@app/Users/Domain/User";

export class UserHDRepository implements IuserRepository {

    public persist(user: User): boolean {
        return true;
    }

    public findById(id: string): User {
        return User.create(id, "jose");
    }
}
