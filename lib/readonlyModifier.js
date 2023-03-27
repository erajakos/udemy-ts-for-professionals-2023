"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point = {
    x: 0,
    y: 0,
};
// const prevents variable assignment
//point = { x: 1, x: 3 }
// const does not prevent property assignment (unless readonly)
//point.x = 1;
//point.y = 1;
class Animal {
    constructor(name) {
        this.name = name;
    }
}
const sheep = new Animal("sheep");
