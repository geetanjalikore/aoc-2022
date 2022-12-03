const { sum, findMax, findSecondMax, readInput } = require('./utils.js');

const convertToArray = (data) => {
  const calories = data.split('\n\n');
  return calories.map(elf => elf.split('\n').map(calorie => +calorie));
}

const carryingCalories = (calories) => {
  const sumOfCalories = calories.map(sum);
  const max = findMax(sumOfCalories);
  const secondMax = findSecondMax(sumOfCalories, max);
  const thirdMax = findSecondMax(sumOfCalories, secondMax);

  return sum([max + secondMax + thirdMax]);
}

const main = () => {
  const data = readInput('day1.txt');
  const calories = convertToArray(data);

  console.log(carryingCalories(calories));

  // read you test input [lines]
  // prase 
  // read you puzzle input [lines]
  // console.log ('problem 1 test')
  // assert (problem1(input), 15)
  // console.log (' test successful')
  // console.log ('problem 1 solution')

  // console.log(problem1(puzzle input))

  // console.log ('problem 2 test')
  // assert (problem1(input), 15)
  // console.log (' test successful')
  // console.log ('problem 1 solution')



};

main();
