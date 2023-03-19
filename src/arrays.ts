// Array
let array: number[] = [1,2,3];
//let array: Array<number> = [1,2,3]

array = [1];
array = [1,2,3];

// compiler error, could be fixed with union type (number|string)[])
//array = ["Hello"] 

// Tuple

let tuple: [number, number] = [0, 0]; // point in space

// Usage
tuple = [1, 2];
tuple = [3, 4];
//tuple = [1,2,3]; // compiler error
// tuple = ["eisovi", 3]; // compiler error

export {}