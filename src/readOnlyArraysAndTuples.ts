// defining input as readonly, mutating methods will not be available
function reverseSorted(input: readonly number[]): number[] {
    //return input.sort().reverse(); // sort mutates input
    return input.slice().sort().reverse(); // ok

    //return [...input].sort().reverse(); // ok
    //return [...input].sort((a, b) => b - a); // ok

}

const start = [1,2,5,4,7];
const result = reverseSorted(start);
console.log(result);

type Point = readonly[number, number];
function move(point: Point, x: number, y: number): Point {
    return [point[0] + x, point[1] + y];
}

const point: Point = [0, 0];
const moved = move(point, 2, 3);

export {};