"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// user defined type guard
function isSquare(shape) {
    return 'size' in shape;
}
function isRectangle(shape) {
    return 'width' in shape;
}
function area(shape) {
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    const ensure = shape;
    return ensure;
}
