let suffix: string | null = "mySuffic";

// callback functions, same as with setTimeout don't guarantee the
// suffix value stays same
if (suffix != null) {
    const suffixLocal = suffix;
    ['a', 'b'].forEach(a => {
        //let exapleTwo = a + suffix.toUppercase(); // compile error
        let exampleTwo = a + suffixLocal.toUpperCase();
    })
}

export {};