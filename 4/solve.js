const fs = require("fs");

const input = fs.readFileSync('4/input.txt', 'utf-8');
const example = fs.readFileSync('4/example.txt', 'utf-8');

const lines = example.split('\n');

let p1 = 0;

for (const line of lines) {
  const winnNums = card.split('|')[0].split(':')[1].trim().split(' ').map(num => parseInt(num));
  const drawnNums = card.split('|')[1].split(' ').filter(num => num !== '').map(num => parseInt(num));


}

