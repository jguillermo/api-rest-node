export class User {

    private _id: string;
    private _name: string;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    static create(id: string, name: string): User {
        let user = new User(id, name);

        return user
    }
}

export interface UserRepository {
    persist(user: User): boolean;
    findById(id: string): User;
}

