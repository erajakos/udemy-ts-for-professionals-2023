"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// assertion function
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
function assertDate(value) {
    if (value instanceof Date)
        return;
    else
        throw new TypeError('value is not Date');
}
function loadPerson() {
    if (Math.random() < 0.5) {
        return {
            name: 'Erkki',
            dateOfBirth: new Date("1981-10-10"),
        };
    }
    return null;
}
const maybePerson = loadPerson();
// since assertion function return true, we know that the person exists
assert(maybePerson != null, 'Could not load person');
console.log('Name:', maybePerson.name);
assertDate(maybePerson.dateOfBirth);
console.log('Date of birth', maybePerson.dateOfBirth.toISOString);
