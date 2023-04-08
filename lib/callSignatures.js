"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b, c) => {
    return a + b + (c != null ? c : 0);
};
add.debugName = 'Adder';
console.log(add(1, 2, 3));
const PC = class {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
};
const myPoint = new PC(3, 6);
// alternative syntax
class PointClass {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const myAltPoint = PointClass;
