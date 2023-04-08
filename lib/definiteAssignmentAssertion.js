"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dice; // definite assignment assertion !
function rollDice() {
    dice = Math.floor(Math.random() * 6) + 1;
}
rollDice();
console.log('current value of dice', dice);
class Point {
    constructor() {
        this.moveRandom();
    }
    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}
