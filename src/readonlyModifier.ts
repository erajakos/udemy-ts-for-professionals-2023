type Point = {
    readonly x: number,
    readonly y: number,
};

const point: Point = {
    x: 0,
    y: 0,
};

// const prevents variable assignment
//point = { x: 1, x: 3 }

// const does not prevent property assignment (unless readonly)
//point.x = 1;
//point.y = 1;

class Animal {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const sheep = new Animal("sheep");
//sheep.name = "wolf"; // not allowed

export {};