"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let regex = new RegExp('ab+c');
let array = [1, 2, 3]; // new Array
//let sameArray: Array<number> = new Array(1,2,3);
let set = new Set([1, 2, 3]); // guarantee unique values
// fifo queue
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
let queue = new Queue();
queue.push("Erkki");
queue.push("Training");
console.log(queue.pop()); // Erkki
