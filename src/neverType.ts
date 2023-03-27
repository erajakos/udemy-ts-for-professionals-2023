// these functions will never return

const fail = (message: string) => {
    throw new Error(message);
}

const sing = function() {
    while(true) {
        console.log("Singing...");
    }
}

//let example: never = 123; // compile time error

type Square = {
    kind: 'square',
    size: number,
};

type Rectangle = {
    kind: 'rectangle',
    width: number,
    height: number,
};

type Circle = {
    kind: 'circle',
    radius: number,
}

type Shape = 
  | Square
  | Rectangle
  | Circle;

function area(s: Shape) {
    if (s.kind == 'square') {
        return s.size * s.size;
    } else if (s.kind == 'rectangle') {
        return s.width * s.width;
    } else if (s.kind == 'circle') {
        return Math.PI * (s.radius ** 2);
    }

    // typechecker gives error if some case is not handled
    const ensureAllCasesHandled: never = s;

    return ensureAllCasesHandled;
}

export {};

