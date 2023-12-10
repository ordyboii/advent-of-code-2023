const fs = require("fs");

const input = fs.readFileSync('5/input.txt', 'utf-8');
const example = fs.readFileSync('5/example.txt', 'utf-8');

const maps = example.split('\n\n');
// const seeds = maps[0].split(':')[1].trim().split(' ').map(num => parseInt(num));

console.log(maps[0]);

