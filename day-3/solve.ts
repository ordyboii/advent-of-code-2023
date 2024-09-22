import { readFile } from "fs/promises";

const input = await readFile("day-3/input.txt", "utf-8");
const example = await readFile("day-3/example.txt", "utf-8");

const lines = input.split(/\n/);
