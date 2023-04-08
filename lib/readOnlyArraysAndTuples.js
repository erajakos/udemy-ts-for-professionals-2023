"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// defining input as readonly, mutating methods will not be available
function reverseSorted(input) {
    //return input.sort().reverse(); // sort mutates input
    return input.slice().sort().reverse(); // ok
    //return [...input].sort().reverse(); // ok
    //return [...input].sort((a, b) => b - a); // ok
}
const start = [1, 2, 5, 4, 7];
const result = reverseSorted(start);
console.log(result);
function move(point, x, y) {
    return [point[0] + x, point[1] + y];
}
const point = [0, 0];
const moved = move(point, 2, 3);
