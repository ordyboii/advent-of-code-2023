const fs = require("fs");

const input = fs.readFileSync('4/input.txt', 'utf-8');
const example = fs.readFileSync('4/example.txt', 'utf-8');

const lines = input.split('\n');

let p1 = 0;
const p2 = lines.map(() => 1);

for (let i = 0; i < lines.length; i++) {
  const winnNums = lines[i].split('|')[0].split(':')[1].trim().split(' ').map(num => parseInt(num));
  const drawnNums = lines[i].split('|')[1].split(' ').filter(num => num !== '').map(num => parseInt(num));

  let total = 0;
  let matches = 0;

  for (const num of drawnNums) {
    if (winnNums.includes(num)) {
      total = total === 0 ? 1 : total * 2;
      matches += 1;
    }
  }

  p1 += total;

  for (let j = 0; j < matches; j++) {
    p2[i + j + 1] += p2[i];
  }
}

console.log('Part one:', p1);
console.log('Part two:', p2.reduce((a, b) => a + b));

