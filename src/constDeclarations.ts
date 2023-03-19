type Point = {x : number, y: number};

const point: Point = { x: 0, y: 0};

//point = { x: 2, y: 1}; // redeclaration not allowed

// object can be modified however
point.x = 3;
point.y = 1;

export {};