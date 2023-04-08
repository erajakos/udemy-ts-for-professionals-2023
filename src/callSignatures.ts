// call signature
type Add = (a: number, b: number) => number;
type AddAlt = {
    (a: number, b: number) : number,
    (a: number, b: number, c: number) : number, //overloading
    debugName?: string,
};

interface AddAltInterface {
    (a: number, b: number): number,
}

const add: AddAlt = (a: number, b: number, c?:number) => {
    return a + b + (c != null ? c : 0);
}
add.debugName = 'Adder';

console.log(add(1,2,3));

//type PointCreator = new(x: number, y: number) => { x: number, y: number}; // short form

type Point = {
    x: number,
    y: number,
    z?: number,
}

// constructor signature
type PointCreator = {
    new(x: number, y: number) : Point,
    new(x: number, y: number, z: number) : Point,
    debugName?: string,
};

const PC: PointCreator = class {
    constructor(public x: number, public y: number, public z?: number) {}
}
const myPoint = new PC(3, 6);

// alternative syntax
class PointClass {
    constructor(public x: number, public y: number, public z?: number) {}
}
const myAltPoint: PointCreator = PointClass;

export {};