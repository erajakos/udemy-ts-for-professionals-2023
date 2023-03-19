"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText() {
    return "Tadaa";
}
const myText = getText();
// unkown
//myText.length;
// I just know more about the type than the compiler
const myLength = myText.length;
const myLengthAlt = myText.length;
console.log(myLength, myLengthAlt);
