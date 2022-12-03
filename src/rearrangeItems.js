const { partitionBy, readInput } = require("./utils.js");

const devideIntoCompartments = (ruskSack) => {
  return ruskSack.map(contents => {
    const compartmentLength = contents.length / 2;
    return [
      contents.substr(0, compartmentLength).split(''),
      contents.substr(compartmentLength).split(''),
    ];
  });
}

const commonItem = ([compartment1, compartment2]) => {
  for (let index = 0; index < compartment1.length; index++) {
    const item = compartment1[index];
    if (compartment2.includes(item)) return item;
  }
};

const totalPriority = (commonItemList) => {
  return commonItemList.reduce((total, commonItem) => {
    const code = commonItem.charCodeAt();
    if (code > 96 && code < 123) return total += code - 96;
    return total += code - 38;
  }, 0);
};

const commonBadgeItem = (badges) => {
  return badges.map(([content1, content2, content3]) => {
    for (let index = 0; index < content1.length; index++) {
      const item = content1[index];
      if (content2.includes(item) && content3.includes(item)) return item;
    }
  });
}

const problemSolver1 = (ruskSack) => {
  const compartmentList = devideIntoCompartments(ruskSack);
  const commonItemList = compartmentList.map(commonItem);
  return totalPriority(commonItemList);
};

const problemSolver2 = (ruskSack) => {
  const badges = partitionBy(ruskSack, 3);
  const commonBadgeItemList = commonBadgeItem(badges);
  return totalPriority(commonBadgeItemList);
};

const data = readInput('day3.txt');
console.log((problemSolver1(data)));
console.log((problemSolver2(data)));
