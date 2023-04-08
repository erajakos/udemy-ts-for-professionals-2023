"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const erkki = {
    name: 'Erkki',
    email: 'my@email.com',
    phone: '113344',
};
const alfred = {
    name: 'Alfred',
    email: 'alfred@email.com',
    //phone: undefined, //this is valid as well
};
console.log(alfred.phone); // undefined
class Point {
}
const point = new Point();
point.x; // undefined
point.x = 0;
point.x = undefined;
point.x = null;
