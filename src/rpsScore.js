const { readInput } = require('./utils.js');

const rock = { name: 'rock', points: 1 }
const paper = { name: 'paper', points: 2 }
const scissors = { name: 'scissors', points: 3 }

const game = {
  A: rock, X: rock,
  B: paper, Y: paper,
  C: scissors, Z: scissors,
  winPoints: 6,
  drawPoints: 3,
  winnigMoves: { rock: 'paper', paper: 'scissors', scissors: 'rock' },
  losingMoves: { paper: 'rock', scissors: 'paper', rock: 'scissors' },
  rock: { name: 'rock', points: 1 },
  paper: { name: 'paper', points: 2 },
  scissors: { name: 'scissors', points: 3 }
}

const countTotalScore = (strategyGuide) => {
  return strategyGuide.reduce((totalScore, [opponent, you]) => {
    const opponentsMove = game[opponent].name;
    const yourMove = game[you].name;

    if (opponentsMove === yourMove) {
      totalScore += game.drawPoints + game[you].points;
    } else if (game.winnigMoves.includes(`${opponentsMove}-${yourMove}`)) {
      totalScore += game.winPoints + game[you].points;
    } else {
      totalScore += game[you].points;
    }

    return totalScore;
  }, 0);
}

const countScoresOnStrategy = (strategyGuide) => {
  return strategyGuide.reduce((totalScore, [opponent, yourStrategy]) => {
    const opponentMove = game[opponent].name;
    let yourMove;

    if (yourStrategy === 'Z') {
      yourMove = game.winnigMoves[opponentMove];
      totalScore += game[yourMove].points + game['winPoints'];
    } else if (yourStrategy === 'X') {
      yourMove = game.losingMoves[opponentMove];
      totalScore += game[yourMove].points;
    } else {
      totalScore += game[opponentMove].points + game['drawPoints'];
    }

    return totalScore;
  }, 0);
}

const main = () => {
  let strategyGuide = readInput('day2.txt');
  strategyGuide = strategyGuide.map(strategy => strategy.split(' '));

  console.log(countScoresOnStrategy(strategyGuide));
}

main();
