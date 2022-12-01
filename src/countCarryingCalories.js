const fs = require('fs');
const { sum, findMax, findSecondMax } = require("./utils.js");

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
  const data = fs.readFileSync('../inputs/day1.txt', 'utf8');
  const calories = convertToArray(data);

  console.log(carryingCalories(calories));
};

main();
