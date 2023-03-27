class Person {
    private age: number;
    
    constructor(age: number) {
        this.age = age;
    }

    //growOld() {
    //    this.age++;
    //}

    // array function captures this from the surrounding context
    growOld = () => {
        this.age++;
    }

    // same here
    getAge = () => {
        return this.age;
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

export {};