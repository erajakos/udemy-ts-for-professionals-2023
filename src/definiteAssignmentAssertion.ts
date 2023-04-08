let dice!: number; // definite assignment assertion !
function rollDice() {
    dice = Math.floor(Math.random() * 6) + 1;
}

rollDice();

console.log('current value of dice', dice);

class Point {
    // definite assignment assertion here as well
    x!: number; 
    y!: number;

    constructor() {
        this.moveRandom();
    }

    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}

export{};