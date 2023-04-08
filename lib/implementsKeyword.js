"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(animal) {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return 'Meow';
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return 'Bark';
    }
}
const cat = new Cat('Cat');
const dog = new Dog('Dog');
log(cat);
log(dog);
