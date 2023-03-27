function padLeft(value: string, padding: number | string) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }

    // compiler already knows that type must be string since 
    // number is checked
    //if (typeof padding === 'string') {
        return padding + value;
    //}
}

padLeft('Hello world', 4); // '    Hello world'
padLeft('Hello world', '--') // '--Hello world'


// classes example

class Cat {
    meow() {
        console.log('meow');
    }
}

class Dog {
    bark() {
        console.log('woof');
    }
}

type Animal = Cat | Dog;

function speak(animal: Animal) {
    // typeof doesn't work here, both are of type 'object'
    if (animal instanceof Cat) {
        animal.meow();
    }
    if (animal instanceof Dog) {
        animal.bark();
    }
}

type Square = {
    size: number,
}

type Rectangle = {
    width: number,
    height: number,
}

type Shape = Square | Rectangle;

function area(shape: Shape) {
    // instanceof not working here

    // typescript compiler can identify the type based on 
    // the properties

    if ('size' in shape) {
        return shape.size * shape.size;
    }
    if ('width' in shape) {
        return shape.width * shape.height;
    }
}

export {};