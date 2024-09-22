import { readFile } from "fs/promises";

const input = await readFile("day-5/input.txt", "utf-8");
const example = await readFile("day-5/example.txt", "utf-8");

const maps = example.split("\n\n");
// const seeds = maps[0].split(':')[1].trim().split(' ').map(num => parseInt(num));

console.log(maps[0]);
