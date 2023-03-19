// from node env variables
console.log(process.env.USER);

// this could be moved to env.d.ts as well
//declare const process: any;

// but instead, load node type definitions
// npm i @types/node

import fs from 'fs';

// with node types, code autocomplete works
//fs.writeFil...

