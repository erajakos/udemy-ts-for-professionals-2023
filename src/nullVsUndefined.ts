let notDefined: undefined = undefined;
let notPresent: null = null;

function logVowels(value: string) {
    console.log(value.match(/[aeiou]/gi));
}

logVowels('hello'); // ['e', 'o']
logVowels('sky'); // null

// ---------------

console.log(null == null); // true
console.log(undefined == undefined); // true 

// double equal works if we need to check for both null and undefined
console.log(undefined == null); // true

console.log(false == null); // false
console.log(0 == null); // false
console.log('' == null); // false

function someBooleanOrNullOrUndefined(): boolean | null | undefined {
    return null;
}

const result = someBooleanOrNullOrUndefined();

if (result == null) {
    console.log('null or undefined', result);
}
if (result != null) {
    // since it's not null or undefined it has to be boolean
    // Type narrowing
    console.log('Boolean', result);
}

// -------------------------

function decorate(value: string | null | undefined) {
    if (value == null) {
        return value;
    }
    return `-- ${value.trim()}`
}

export {};