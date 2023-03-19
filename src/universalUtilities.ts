function log(value: unknown) {
    if (typeof value == "string") {
        console.log(value);
    } else if (typeof value == "number") {
        console.log(value.toFixed(2));
    }
}

log(3.23234234234);
log("awef");

export {};