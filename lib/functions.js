"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function log(msg) {
    console.log(msg);
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
console.log(sum(1, 2, 3)); // 6
const adder = function (a, b) {
    return a + b;
};
