const fs = require("fs");

const input = fs.readFileSync('one/input.txt', 'utf-8');
const example = fs.readFileSync('one/example.txt', 'utf-8');

// Part one
const calibrationTotal = input
  .split('\n')
  .map(line => {
    const nums = [];
 
    for (const val of line) {
      if (!isNaN(val)) {
        nums.push(val);
      }
    }
    
    return parseInt(`${nums.at(0)}${nums.at(-1)}`);
  })
  .reduce((a, b) => a + b);

console.log(`Part one: ${calibrationTotal}`);

// Part two

const numVals = {
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

const actualCalibrationTotal = input
  .split('\n')
  .map(line => {
    const nums = [];
 
    for (let i = 0; i < line.length; i++) {
      if (!isNaN(line[i])) {
        nums.push(line[i]);
      }

      for (const [key, val] of Object.entries(numVals)) {
        if (line.substring(i).startsWith(key)) {
          nums.push(val)
        }
      }
    }
    
    return parseInt(`${nums.at(0)}${nums.at(-1)}`);
  })
  .reduce((a, b) => a + b);


console.log(`Part two: ${actualCalibrationTotal}`);
