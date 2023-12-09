const fs = require("fs");

const input = fs.readFileSync('2/input.txt', 'utf-8');
const example = fs.readFileSync('2/example.txt', 'utf-8');

const p1 = [];
const p2 = [];

for (const line of input.split('\n')) {
  const [game, sets] = line.split(':');
  const gameId = parseInt(game.replace('Game ', ''));
  const gameSets = sets.split(';').map(set => set.trim());

  let possible = true;
  const fewest = { red: 0, blue: 0, green: 0 }

  for (const set of gameSets) {
    const rounds = set.split(',').map(round => round.trim());

    for (const round of rounds) {
      const num = parseInt(round.split(' ')[0]);
      const colour = round.split(' ')[1];

      if (colour === 'red') {
        if (fewest.red === 0) {
          fewest.red = num;
        } else {
          if (num > fewest.red) {
            fewest.red = num;
          }
        }
      }

      if (colour === 'blue') {
        if (fewest.blue === 0) {
          fewest.blue = num;
        } else {
          if (num > fewest.blue) {
            fewest.blue = num;
          }
        }
      }

      if (colour === 'green') {
        if (fewest.green === 0) {
          fewest.green = num;
        } else {
          if (num > fewest.green) {
            fewest.green = num;
          }
        }
      }

      if (colour === 'blue' && num > 14) {
        possible = false;
      } else if (colour === 'green' && num > 13) {
        possible = false;
      } else if (colour === 'red' && num > 12) {
        possible = false;
      }
    }
  }

  p2.push(fewest.red * fewest.green * fewest.blue);
  if (possible) p1.push(gameId);
}

console.log("Part one:", p1.reduce((a, b) => a + b));
console.log("Part two:", p2.reduce((a, b) => a + b));
