type Square = {
    kind: 'square',
    size: number,
}

type Rectangle = {
    kind: 'rectangle',
    width: number,
    height: number,
}

type Shape = Square | Rectangle;

function area(shape: Shape) {
    if (shape.kind == 'square') {
        return shape.size * shape.size;
    }
    if (shape.kind == 'rectangle') {
        return shape.width * shape.height;
    }
}

// --------------------

type ValidationSuccess = {
    isValid : true, // literal true
    validatedValue: string,
}

type ValidationFailure = {
    isValid: false, // literal false
    errorMessage: string,
}

type ValidationResult = ValidationSuccess | ValidationFailure;

function logResult(result: ValidationResult) {
    if (result.isValid) {
        console.log('Valid', result.validatedValue);
    }
    if (result.isValid === false) {
        console.log('Invalid', result.errorMessage);
    }
}

export {};