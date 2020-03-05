function twoSum(numbers, target) {
  for (let i = 0; i <= numbers.length - 1; i++) {
    for (let j = 0; j <= numbers.length - 1; j++) {
      if (i !== j && numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 2, 2, 3], 4));
