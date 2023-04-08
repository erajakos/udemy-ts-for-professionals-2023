"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(stringOrStringArray) {
    if (typeof (stringOrStringArray) == 'string') {
        return stringOrStringArray.split('').reverse().join('');
    }
    return [...stringOrStringArray].reverse();
}
const hello = reverse('hello'); // olleh
const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o']); // ['o', 'l'...]
function makeDate(timestampOrYear, month, day) {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
    }
    return new Date(timestampOrYear);
}
const doomsday = makeDate(2000, 1, 1); //1.1.2000
const epoch = makeDate(0); // 1.6.1970
