let exampleAny: any;
let exampleUnknown: unknown;

// SIMILARITIES

// any
exampleAny = "121";
exampleAny = 232;

// unknown
exampleUnknown = "121";
exampleUnknown = 232;

exampleAny.allows.anything();
let anySetBool: boolean = exampleAny; // any allows bypassing type checks

// unknown doesn't allow to use in unsafe manner
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
    let unknownBoolean: boolean = exampleUnknown;
}

// IMPORTANT:
// any works for quick fix migration from javascript but may result in runtime errors
// unkown works for type safe migration from javascript without runtime errors

export {};