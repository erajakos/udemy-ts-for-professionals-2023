type Point2D = {
    x: number,
    y: number,
};

type Point3D = Point2D & {
    z: number,
};

// -----------------------

type Person = {
    name: string,
};

type Email = {
    email: string,
};

type Phone = {
    phone: string,
};

type ContactDetails = Person & Email & Phone;

function contact(details: ContactDetails) {
    console.log(details.phone);
    console.log(details.email);
    console.log(details.name);
}

contact({
    name: 'Erkki',
    phone: '123',
    email: 'erkki@myemail.com',
});

export {};