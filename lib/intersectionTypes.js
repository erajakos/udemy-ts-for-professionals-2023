"use strict";
function contact(details) {
    console.log(details.phone);
    console.log(details.email);
    console.log(details.name);
}
contact({
    name: 'Erkki',
    phone: '123',
    email: 'erkki@myemail.com',
});
