class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} has moved ${distanceInMeters}m.`);
    }
}

let cat = new Animal('Cat');
cat.move(10);
//cat.name = "Dog"; // protected

class Bird extends Animal {
    public fly(distanceInMeters: number): void {
        console.log(`${this.name} has flew ${distanceInMeters}m.`);
    }
}

export {};