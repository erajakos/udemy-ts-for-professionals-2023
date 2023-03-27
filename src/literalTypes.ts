//let direction: 'North' | 'South' | 'East' | 'West';
type CardinalDirection = 'North' | 'South' | 'East' | 'West';
let direction: CardinalDirection = 'South';

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceValue {
    // here we inform typescript that the return value matches DiceValue type
    return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}

/*
if (rollDice() === 7) {
    // compiler error
}
*/

export {};