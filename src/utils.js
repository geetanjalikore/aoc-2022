const fs = require('fs');

const readInput = (file) =>
  fs.readFileSync(`../inputs/${file}`, 'utf8').split('\n');

const sum = (numbers) => numbers.reduce((sum, number) => number + sum, 0);

const findMax = (numbers) =>
  numbers.reduce((max, number) => max > number ? max : number);

const findSecondMax = (numbers, max) =>
  numbers.reduce((secondMax, number) =>
    number > secondMax && number < max ? number : secondMax);

const partitionBy = (array, size) => {
  return array.reduce((partition, element) => {
    const lastBunch = partition[partition.length - 1];
    if (lastBunch.length < size)
      lastBunch.push(element);
    else
      partition.push([element]);
    return partition;
  }, [[]]);
};

module.exports = { sum, findMax, findSecondMax, partitionBy, readInput }

