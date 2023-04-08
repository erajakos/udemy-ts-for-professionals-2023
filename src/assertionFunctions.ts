type Person = {
    name: string,
    dateOfBirth?: Date,
};

// assertion function
function assert(condition: unknown, message: string): asserts condition {
    if (!condition) {
        throw new Error(message);
    }
}

function assertDate(value: unknown): asserts value is Date {
    if (value instanceof Date) return;
    else throw new TypeError('value is not Date');
}

function loadPerson(): Person | null {
    if (Math.random() < 0.5) {
        return {
            name: 'Erkki',
            dateOfBirth: new Date("1981-10-10"),
        }
    }
    return null;
}

const maybePerson = loadPerson();

// since assertion function return true, we know that the person exists
assert(maybePerson != null, 'Could not load person');
console.log('Name:', maybePerson.name);

assertDate(maybePerson.dateOfBirth);
console.log('Date of birth', maybePerson.dateOfBirth.toISOString);

export {};