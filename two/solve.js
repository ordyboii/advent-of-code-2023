const fs = require("fs");

const input = fs.readFileSync('two/input.txt', 'utf-8');
const example = fs.readFileSync('two/example.txt', 'utf-8');

for (const line of example.split('\n')) {
  const [game, sets] = line.split(':');
  const gameId = parseInt(game.replace('Game ', ''));
  const gameSets = sets.split(';').map(set => set.trim());

  console.log(gameId, gameSets);
}
