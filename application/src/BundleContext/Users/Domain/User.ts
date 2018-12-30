export class User {

    get id() {
        return this.$id;
    }

    get name() {
        return this.$name;
    }

    public static create(id: string, name: string): User {
        return new User(id, name);
    }

    constructor(private $id: string, private $name: string) {
        this.$id = $id;
        this.$name = $name;
    }
}

export interface IuserRepository {
    persist(user: User): boolean;
    findById(id: string): User;
}
