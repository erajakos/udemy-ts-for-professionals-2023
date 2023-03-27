"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatCommandLine(input) {
    let line = '';
    if (typeof input == "string") {
        line = input.trim();
    }
    else {
        line = input.map(i => i.trim()).join(" ");
    }
    return line;
}
console.log(formatCommandLine("awef"));
console.log(formatCommandLine(["a", "b"]));
