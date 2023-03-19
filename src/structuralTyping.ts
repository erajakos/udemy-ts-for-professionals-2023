type User = { id: string };
type Product = { id: string };

let user: User = { id: "awef23" };
let product: Product = { id: "jft41" };

// works because user and product have the same type compatibility
user = product;
product = user;

type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number};

let point2D: Point2D = { x: 0, y: 10 };
let point3D: Point3D = { x: 0, y: 10, z: 5 };

// Extra info is ok
point2D = point3D;

// another example
function takesPoint2D(point: Point2D) {};
takesPoint2D(point3D); // duck typing

// missing info example
function takesPoint3D(point: Point3D) {};
//takesPoint3D(point2D);

export {};