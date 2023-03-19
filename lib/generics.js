"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        // initial data
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift(); // remove first element of array and return it
    }
}
const queue = new Queue();
queue.push(2);
queue.push(234);
console.log((_a = queue.pop()) === null || _a === void 0 ? void 0 : _a.toPrecision());
