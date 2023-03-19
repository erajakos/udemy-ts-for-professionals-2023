"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Array
let array = [1, 2, 3];
//let array: Array<number> = [1,2,3]
array = [1];
array = [1, 2, 3];
// compiler error, could be fixed with union type (number|string)[])
//array = ["Hello"] 
// Tuple
let tuple = [0, 0]; // point in space
// Usage
tuple = [1, 2];
tuple = [3, 4];
