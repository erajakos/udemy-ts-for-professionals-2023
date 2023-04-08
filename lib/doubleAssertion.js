"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let point2 = { x: 1, y: 3 };
let point3 = { x: 1, y: 3, z: 5 };
let person = { 'name': 'Erkki', email: 'erkki@email.com' };
point2 = point3; // ok
//point3 = point2; // error
point3 = point2;
console.log(point3); // { x: 1, y: 3, z: 5 }
//person = point3; // error
//point3 = person; // error
//point3 = person as Point3D; // I don't trust you enough
point3 = person; // ok I doubtly trust you
console.log(point3);
