type Point2D = { x: number, y: number};
type Point3D = { x: number, y: number, z: number};
type Person = { name: string, email: string };

let point2: Point2D = { x: 1, y: 3 };
let point3: Point3D = { x: 1, y: 3, z: 5};
let person: Person = { 'name': 'Erkki', email: 'erkki@email.com' };

point2 = point3; // ok
//point3 = point2; // error
point3 = point2 as Point3D;
console.log(point3); // { x: 1, y: 3, z: 5 }

//person = point3; // error
//point3 = person; // error
//point3 = person as Point3D; // I don't trust you enough
point3 = person as unknown as Point3D; // ok I doubtly trust you
console.log(point3);

// use with caution. Might be helpful with migrating javascript code

export {};