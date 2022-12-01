const sum = (numbers) => numbers.reduce((sum, number) => number + sum, 0);

const findMax = (numbers) =>
  numbers.reduce((max, number) => max > number ? max : number);

const findSecondMax = (numbers, max) =>
  numbers.reduce((secondMax, number) =>
    number > secondMax && number < max ? number : secondMax);

module.exports = { sum, findMax, findSecondMax }
