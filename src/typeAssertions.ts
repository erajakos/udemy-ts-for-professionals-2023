function getText(): unknown {
    return "Tadaa";
}

const myText = getText();
// unkown
//myText.length;

// I just know more about the type than the compiler
const myLength = (myText as string).length;
const myLengthAlt = (<string>myText).length;
console.log(myLength, myLengthAlt);

// myLengthAlt does not work in TSX files

export {};

