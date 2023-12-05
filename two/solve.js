const fs = require("fs");

const input = fs.readFileSync('two/input.txt', 'utf-8');
const example = fs.readFileSync('two/example.txt', 'utf-8');

const p1 = new Set();

for (const line of example.split('\n')) {
  const [game, sets] = line.split(':');
  const gameId = parseInt(game.replace('Game ', ''));
  const gameSets = sets.split(';').map(set => set.trim());

  for (const set of gameSets) {
    const turns = set.split(',').map(round => round.trim());
    
    for (const turn of turns) {
      const num = parseInt(turn.split(' ')[0]);
      const colour = turn.split(' ')[1];

      if (
        colour === 'red' && num > 12 ||
        colour === 'green' && num > 13 ||
        colour === 'blue' && num > 14 
      ) {
        continue;
      } else {
        p1.add(gameId);
      }
    }
  }
}

console.log(`Part one:`, p1);
