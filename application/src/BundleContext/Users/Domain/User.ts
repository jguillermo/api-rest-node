import {toString} from "@sdk/Sanitizers";
import { validateId } from "@sdk/Validator";

export function validateUser(user: User) {
    validateId(user.id);
}

export class User {
    public static create(id: any, name: any): User {
        let user: User = new User();
        user.id = toString(id);
        user.name = toString(name);
        validateUser(user);
        return user;
    }
    public id: string;
    public name: string;
}

export interface IuserRepository {
    persist(user: User): boolean;

    findById(id: string): User;
}
