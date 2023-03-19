let regex: RegExp = new RegExp('ab+c');

let array: Array<number> = [1, 2, 3]; // new Array
//let sameArray: Array<number> = new Array(1,2,3);

let set: Set<number> = new Set([1,2,3]); // guarantee unique values

// fifo queue

class Queue<T> {
    // initial data
    private data: Array<T> = [];

    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift(); // remove first element of array and return it
    }
}

let queue: Queue<string> = new Queue();
queue.push("Erkki");
queue.push("Training");

console.log(queue.pop()); // Erkki

export {}; // didn't want to pollute the global scope
