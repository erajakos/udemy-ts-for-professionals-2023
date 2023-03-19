"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} has moved ${distanceInMeters}m.`);
    }
}
let cat = new Animal('Cat');
cat.move(10);
//cat.name = "Dog"; // protected
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} has flew ${distanceInMeters}m.`);
    }
}
