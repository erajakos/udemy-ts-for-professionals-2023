"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strs = {
    hello: 'world'
};
console.log(strs['hello']); // world
const nums = {
    1337: 'leet'
};
console.log(nums[1337]);
const myDict = {
    'hasA': false,
    'hasB': true,
};
const persons = {
    'erkki123': { displayName: 'erkki', email: 'erkki@nonsense.com' },
    'erkki666': { displayName: 'erk', email: 'erkki666@nonsense.com' },
    'jane': { displayName: 'jane', email: 'jane@nonsense.com' },
};
delete persons['erkki666'];
const missing = persons['missing'];
