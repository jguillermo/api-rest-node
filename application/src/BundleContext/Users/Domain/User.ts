import {toString} from "@sdk/Sanitizers";

export class User {
    public static create(id: any, name: any): User {
        let user: User = new User();
        user.id = toString(id);
        user.name = toString(name);
        return user;
    }
    public id: string;
    public name: string;
}

export interface IuserRepository {
    persist(user: User): boolean;
    findById(id: string): User;
}
