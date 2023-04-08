"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this should be defined as first parameter
function double() {
    this.value = this.value * 2;
}
const valid = {
    value: 10,
    double,
};
valid.double();
console.log(valid.value); // 20
const invalid = {
    vale: 10,
    double,
};
