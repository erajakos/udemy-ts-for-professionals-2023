type Animal = {
    name: string,
    voice: () => string,
};

function log(animal: Animal) {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}

class Cat implements Animal {
    constructor(public name: string) {}
    
    voice() {
        return 'Meow';
    }
}

class Dog implements Animal {
    constructor(public name: string) {}
    voice() {
        return 'Bark';
    }
}

const cat = new Cat('Cat');
const dog = new Dog('Dog');

log(cat);
log(dog);

export {};