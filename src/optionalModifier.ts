type Person = {
    name: string,
    email: string,
    phone?: string, // string | undefined
};

const erkki: Person = {
    name: 'Erkki',
    email: 'my@email.com',
    phone: '113344',
};

const alfred: Person = {
    name: 'Alfred',
    email: 'alfred@email.com',
    //phone: undefined, //this is valid as well
}

console.log(alfred.phone); // undefined

class Point {
    x?: number | null;
    y?: number;
}

const point = new Point();
point.x; // undefined

point.x = 0;
point.x = undefined;
point.x = null;

export {};