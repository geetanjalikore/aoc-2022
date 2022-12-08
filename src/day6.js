const fs = require('fs');

const isUniq = (letters => {
  return letters.reduce((isUniqLetter, letter, i) => {
    if (letters.slice(i + 1).includes(letter)) return false;
    return isUniqLetter && true;
  }, true);
});

const pocketMarker = (stream) => {
  for (let index = 0; index < stream.length; index++) {
    if (isUniq(stream.substr(index, 14).split(''))) {
      return index + 14;
    }
  }
};

const stream = fs.readFileSync('../inputs/day6.txt', 'utf8');

console.log(pocketMarker(stream));
