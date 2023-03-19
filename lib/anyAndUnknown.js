"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let exampleAny;
let exampleUnknown;
// SIMILARITIES
// any
exampleAny = "121";
exampleAny = 232;
// unknown
exampleUnknown = "121";
exampleUnknown = 232;
exampleAny.allows.anything();
let anySetBool = exampleAny; // any allows bypassing type checks
// unknown doesn't allow to use in unsafe manner
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
    let unknownBoolean = exampleUnknown;
}
