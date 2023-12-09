const fs = require("fs");

const input = fs.readFileSync('3/input.txt', 'utf-8');
const example = fs.readFileSync('3/example.txt', 'utf-8');

const lines = example.split('\n');
const rows = lines.length;
const columns = lines[0].length;

const grid = lines.map(line => line.split(''));



/**
 * @param {number} x 
 * @param {number} y 
 * @returns {boolean}
 */
function isSymbol(x, y) {
  if (!isNaN(grid[x][y]) && grid[x][y] !== '.') {
    return true;
  } else {
    return false
  }
}

console.log(grid);
