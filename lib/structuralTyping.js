"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { id: "awef23" };
let product = { id: "jft41" };
// works because user and product have the same type compatibility
user = product;
product = user;
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 10, z: 5 };
// Extra info is ok
point2D = point3D;
// another example
function takesPoint2D(point) { }
;
takesPoint2D(point3D); // duck typing
// missing info example
function takesPoint3D(point) { }
;
