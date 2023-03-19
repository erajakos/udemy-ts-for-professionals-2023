"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(value) {
    if (typeof value == "string") {
        console.log(value);
    }
    else if (typeof value == "number") {
        console.log(value.toFixed(2));
    }
}
log(3.23234234234);
log("awef");
