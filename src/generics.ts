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

const queue = new Queue<number>();
queue.push(2);
queue.push(234);
console.log(queue.pop()?.toPrecision());

export {};