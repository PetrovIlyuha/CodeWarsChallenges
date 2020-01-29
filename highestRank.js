function highestRank(arr) {
  let ranksTable = {};
  for (let item of arr) {
    if (!ranksTable[item]) {
      ranksTable[item] = 1;
    } else {
      ranksTable[item] += 1;
    }
  }
  let sortableRanks = [];
  for (let elem in ranksTable) {
    sortableRanks.push([[elem], ranksTable[elem]]);
  }
  sortableRanks.sort((a, b) => b[1] - a[1]);
  let maxRank = sortableRanks[0][1];
  let maxEquals = sortableRanks.filter(item => item[1] === maxRank);
  maxEquals.sort((a, b) => Number(b[0]) - Number(a[0]));
  return Number(maxEquals[0][0]);
}

console.log(highestRank([5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 12, 12]));
