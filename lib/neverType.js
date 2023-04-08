"use strict";
// these functions will never return
Object.defineProperty(exports, "__esModule", { value: true });
const fail = (message) => {
    throw new Error(message);
};
const sing = function () {
    while (true) {
        console.log("Singing...");
    }
};
function area(s) {
    if (s.kind == 'square') {
        return s.size * s.size;
    }
    else if (s.kind == 'rectangle') {
        return s.width * s.width;
    }
    else if (s.kind == 'circle') {
        return Math.PI * (s.radius ** 2);
    }
    // typechecker gives error if some case is not handled
    const ensureAllCasesHandled = s;
    return ensureAllCasesHandled;
}
