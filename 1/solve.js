const fs = require("fs");

const input = fs.readFileSync('1/input.txt', 'utf-8');
const example = fs.readFileSync('1/example.txt', 'utf-8');

const p1 = [];
const p2 = [];

const words = { 
  zero: 0, 
  one: 1, 
  two: 2, 
  three: 3, 
  four: 4, 
  five: 5, 
  six: 6, 
  seven: 7, 
  eight: 8, 
  nine: 9 
}

for (const line of input.split('\n')) {
  const p1Nums = [];
  const p2Nums = [];

  for (let i = 0; i < line.length; i++) {
    if (!isNaN(line[i])) {
      p1Nums.push(line[i]);
      p2Nums.push(line[i]);
    }

    for (const [key, val] of Object.entries(words)) {
      if (line.substring(i).startsWith(key)) {
        p2Nums.push(val);
      }
    }
  }

  p1.push(parseInt(`${p1Nums.at(0)}${p1Nums.at(-1)}`));
  p2.push(parseInt(`${p2Nums.at(0)}${p2Nums.at(-1)}`));
}

console.log(`Part one: ${p1.reduce((a, b) => a + b)}`);
console.log(`Part two: ${p2.reduce((a, b) => a + b)}`);
