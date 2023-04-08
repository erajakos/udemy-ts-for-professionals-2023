function reverse(string: string): string;
function reverse(stringArray: string[]): string[];
function reverse(stringOrStringArray: string | string[]) {
    if (typeof(stringOrStringArray) == 'string') {
        return stringOrStringArray.split('').reverse().join('');
    }
    return [...stringOrStringArray].reverse();
}

const hello = reverse('hello'); // olleh
const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o']); // ['o', 'l'...]

// function overload shadows the implementation so that the first two
// are the only valid signatures
function makeDate(timestampOrYear: number): Date;
function makeDate(timestampOrYear: number, month: number, day: number): Date;
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
    }
    return new Date(timestampOrYear);
}

const doomsday = makeDate(2000, 1,1); //1.1.2000
const epoch = makeDate(0); // 1.6.1970
//const invalid = makeDate(2000, 1); // error

export {};