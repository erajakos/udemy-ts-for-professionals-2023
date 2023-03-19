function add(a: number, b: number): number {
    return a + b;
}

function log(msg: string): void {
    console.log(msg);
}

function sum(...values: number[]) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1,2,3)); // 6

// function type alias
type Add = (a: number, b: number) => number;
const adder: Add = function(a: number, b:number): number {
    return a + b;
}

export {};