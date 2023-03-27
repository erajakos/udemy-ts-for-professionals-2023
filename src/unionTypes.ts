type CommandLineInput = string | string[];

function formatCommandLine(input: CommandLineInput) {
    let line = '';
    if (typeof input == "string") {
        line = input.trim();
    } else {
        line = input.map(i => i.trim()).join(" ");
    }
    return line;
}

console.log(formatCommandLine("awef"));
console.log(formatCommandLine(["a", "b"]));
//console.log(formatCommandLine(123)); // error

export {};