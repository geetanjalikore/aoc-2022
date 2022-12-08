const { readInput } = require('./utils');

const isRangeIncluded = ([id1, id2], [id3, id4]) => id1 <= id3 && id2 >= id4;

const isOverlapped = ([, id2], [id3, id4]) => id2 >= id3 && id2 <= id4;

const countDuplicateAssignments = (assignments) => {
  return assignments.filter(([range1, range2]) =>
    isRangeIncluded(range1, range2) || isRangeIncluded(range2, range1)).length;
};

const countOverlaps = (assignments) => {
  return assignments.filter(([range1, range2]) =>
    isOverlapped(range1, range2) || isOverlapped(range2, range1)).length;
};

const convertToAssignmentPairs = (lines) => {
  return lines.map(line => line.split(',').map(pairs => {
    pairs = pairs.split('-');
    return pairs.map(id => +id);
  }));
};

const lines = readInput('day4.txt');
const assignments = convertToAssignmentPairs(lines);

console.log(countDuplicateAssignments(assignments));
console.log(countOverlaps(assignments));
