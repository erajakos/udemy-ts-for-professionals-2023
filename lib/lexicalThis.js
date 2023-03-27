"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(age) {
        //growOld() {
        //    this.age++;
        //}
        // array function captures this from the surrounding context
        this.growOld = () => {
            this.age++;
        };
        // same here
        this.getAge = () => {
            return this.age;
        };
        this.age = age;
    }
}
const person = new Person(0);
// person.growOld(); // this works
const growOld = person.growOld;
const age = person.getAge;
setTimeout(() => {
    growOld();
    console.log(age());
}, 1000);
