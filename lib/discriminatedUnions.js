"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function area(shape) {
    if (shape.kind == 'square') {
        return shape.size * shape.size;
    }
    if (shape.kind == 'rectangle') {
        return shape.width * shape.height;
    }
}
function logResult(result) {
    if (result.isValid) {
        console.log('Valid', result.validatedValue);
    }
    if (result.isValid === false) {
        console.log('Invalid', result.errorMessage);
    }
}
