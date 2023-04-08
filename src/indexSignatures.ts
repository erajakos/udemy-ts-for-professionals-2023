const strs = {
    hello: 'world'
};

console.log(strs['hello']); // world

const nums = {
    1337: 'leet'
};

console.log(nums[1337]);

type Dictionary = {
    [key: string]: boolean,
};

const myDict: Dictionary = {
    'hasA': false,
    'hasB': true,
};

type Person = {
    displayName: string,
    email: string,
}

type PersonDictionary = {
    [username: string]: Person | undefined,
    jane: Person, // jane must always be in the dictionary
    //alfred: boolean, // not working, alfred should be Person
};

const persons: PersonDictionary = {
    'erkki123': { displayName: 'erkki', email: 'erkki@nonsense.com' },
    'erkki666': { displayName: 'erk', email: 'erkki666@nonsense.com' },
    'jane': { displayName: 'jane', email: 'jane@nonsense.com' },
};

delete persons['erkki666'];

const missing = persons['missing'];
//console.log(missing.email);

export {};
