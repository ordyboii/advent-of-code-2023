import { readFile } from "fs/promises";

const input = await readFile("day-1/input.txt", "utf-8");
const example = await readFile("day-1/example.txt", "utf-8");

const p1: Array<number> = [];
const p2: Array<number> = [];

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
  nine: 9,
};

for (const line of input.split("\n")) {
  const p1Nums: Array<number> = [];
  const p2Nums: Array<number> = [];

  for (let i = 0; i < line.length; i++) {
    const num = parseInt(line[i]);

    if (!isNaN(num)) {
      p1Nums.push(num);
      p2Nums.push(num);
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
