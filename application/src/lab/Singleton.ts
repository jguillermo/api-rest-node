class Singleton {
    public static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
            // ... any one time initialization goes here ...
        }
        return Singleton.instance;
    }
    private static instance: Singleton;
    private constructor() {
        // do something construct...
    }
    public someMethod() { return "hi"; }
}

// let instance = Singleton.getInstance(); // do something with the instance...
