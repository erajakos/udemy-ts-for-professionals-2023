"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let direction = 'South';
function rollDice() {
    // here we inform typescript that the return value matches DiceValue type
    return (Math.floor(Math.random() * 6) + 1);
}
