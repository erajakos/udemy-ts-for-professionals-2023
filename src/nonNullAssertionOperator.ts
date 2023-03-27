type Point = {
    x: number,
    y: number,
};

let point: Point;

function initialize() {
    point = { x: 0, y: 0 };
}

initialize();

// Typescript does not perform deep code analysis
//console.log('After initialization', point.x, point.y); // type error

// non-null assertion, we know the x and y properties are not undefined
// in general it's better to avoid these assertions
console.log('After initialization', point!.x, point!.y); // type error

function initialize2(): Point {
    return { x: 0, y: 0};
}

const point2 = initialize2();
console.log(point2.x, point2.y);

type Person = {
    name: string,
    email?: string | null,
}

function sendEmail(email: string) {
    console.log("Sent email", email);
}

function ensureContactable(person: Person) {
    if (person.email == null) {
        throw new Error(`Person ${person.name} is not contactable`);
    }
}

function contact(person: Person) {
    //ensureContactable(person);
    //sendEmail(person.email!);

    if (person.email == null) {
        throw new Error(`Person ${person.name} is not contactable`);
    }
    sendEmail(person.email);
}

export {};