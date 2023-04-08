const king = 'elvis';
//king = 'john'; // error

const upperCased = king.toUpperCase(); // king === 'elvis'

const dave = {
    name: 'dave',
    role: 'drummer',
    skills: ['drumming', 'headbanging'],
} as const; // cont modifies name, role and skills as readonly

/*
dave = {
    name: 'mary',
    role: 'singer',
    skills: ['singing', 'drumming', 'headbanging'],
};
*/

// ok without as const
/*
dave.name = 'mary';
dave.role = 'singer';
dave.skills.unshift("singing");
*/

function layout(settings: {
    align: 'left' | 'right' | 'center',
    padding: number,
}) {
    console.log('Performing layout', settings);
}

const example = {
    align: 'left' as const, // limit mutability
    padding: 0,
};

//example.align = 'right'; // error

layout(example);

export {};