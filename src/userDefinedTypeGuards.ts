type Square = {
    size: number,
};

type Rectangle = {
    width: number,
    height: number,
};

type Shape = Square | Rectangle;

// user defined type guard
function isSquare(shape: Shape): shape is Square {
    return 'size' in shape;
}
function isRectangle(shape: Shape): shape is Rectangle {
    return 'width' in shape;
}

function area(shape: Shape) {
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    const ensure: never = shape;
    return ensure;
}

export {};