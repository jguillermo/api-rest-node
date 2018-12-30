export class User {

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    public static create(id: string, name: string): User {
        const user = new User(id, name);

        return user;
    }

    private _id: string;
    private _name: string;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }
}

export interface UserRepository {
    persist(user: User): boolean;

    findById(id: string): User;
}
