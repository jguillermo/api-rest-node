"use strict";
class Singleton {
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
            // ... any one time initialization goes here ...
        }
        return Singleton.instance;
    }
    constructor() {
        // do something construct...
    }
    someMethod() { return "hi"; }
}
// let instance = Singleton.getInstance(); // do something with the instance...
